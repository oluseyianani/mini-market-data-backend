const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const Models = require('../db/models');
const Helpers = require('../helpers/index');


const { User } = Models;
const { HttpResponseHelper } = Helpers
dotenv.config();

/**
 * @class { UserController }
 * @description { Handles Users Requests }
 */
class UserController {
    /**
     * @param { object } req
     * @param { object } res
     * @returns { object } Json
     */
    static async register(req, res) {
      try {
        const {
          email,
          password,
          firstName,
          lastName
        } = req.body;
  
        const hashedPassword = Helpers.hashPassword(password);
        console.log('hashed -->', hashedPassword);
        const foundUserEmail = await User.findOne({ where: { email } });

        if (foundUserEmail) {
          return res.status(422).json({
            success: false,
            message: `Email already exist`,
          });
        }
        User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        })
          .then((data) => {
            const payload = {
              id: data.dataValues.id,
              email: data.dataValues.email,
              firstName: data.dataValues.firstName,
              lastName: data.dataValues.lastName,
              role: data.dataValues.role
            };
            const token = Helpers.issueToken(payload);
       
            return HttpResponseHelper.formatResponseWithToken(res, token, 201, 'Registered', { id: payload.id, token})
          });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: {
            message: error.message,
          }
        });
      }
    }
  
  
    /**
     *
     * @param { object } req
     * @param { object } res
     * @returns { object } json
     */
    static login(req, res) {
      const {
        email,
        password,
      } = req.body;

      User.findOne({
        where: {
          email,
        }
      })
        .then((user) => {
          if (!user) {
            return res.status(404).json({
              success: false,
              message: 'email does not exist'
            });
          }
          const storedHashedPassword = user.password;
          
          const correctPassword = bcrypt.compareSync(password, storedHashedPassword);
          if (!correctPassword) {
            return res.status(400).json({
              success: false,
              message: 'email or password incorrect',
            });
          }

          const payload = {
            id: user.dataValues.id,
            email: user.dataValues.email,
            firstName: user.dataValues.firstName,
            lastName: user.dataValues.lastName,
            role: user.dataValues.role
          };
          
          const token = Helpers.issueToken(payload);
          return HttpResponseHelper.formatResponseWithToken(res, token, 200, 'Logged in', {id: payload.id, token})
        })
        .catch(error => res.status(500).json({
            success: false,
            error: {
              message: error.message,
            }
          })
        );
    }
  }
  
  module.exports = UserController;
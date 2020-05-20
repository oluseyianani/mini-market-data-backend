const Models = require('../db/models');

const { User } = Models;

/**
 * @description { verifies users input}
 */
class UserHelper {
 
  /**
   * @param { userId } userId
   * @returns { Boolean } Boolean
   */
  static async checkUserExistence(userId) {
    const foundUser = await User.findOne({
      where: {
        id: userId
      }
    });
    if (!foundUser) {
      return null;
    }
    return true;
  }
}

module.exports = UserHelper;

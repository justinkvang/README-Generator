const axios = require('axios');

const githubData = {
  async getUser(userResponses) {
    try { let response = await axios
        
        .get(`https://github.com/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = githubData;
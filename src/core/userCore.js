const userServices = require('../services/getUsersServices').getUsers();

module.exports.getUsers = async function () {
    return  await userServices.then(res => res.json())
      .then(data => {
           return data;
      }).catch(err => console.log(err));
};


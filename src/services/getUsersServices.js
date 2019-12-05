const fetch = require('node-fetch');

  module.exports.getUsers = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users');
  };



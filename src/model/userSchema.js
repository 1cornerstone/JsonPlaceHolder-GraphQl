const   {buildSchema} = require('graphql');

  module.exports.schema = buildSchema(`
    type Query {
       users : [User] 
       user(id : Int!) : User
    },
    type User {
      id : Int
      name : String
      username : String
      email : String
     phone : String
     address : Address
     website : String
      company : Company
    }
   
    type Address {
      street : String
      suite : String
      city: String
      zipcode : String
    }
    
    type Company{
       name: String
       catchPhrase: String
       bs: String
    }
     
`);


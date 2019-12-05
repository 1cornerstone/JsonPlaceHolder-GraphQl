
 Using GraphQl (query language) with  express and normal api.
 
  data gotten from  https://jsonplaceholder.typicode.com/users
  
  you can check screenshot folder
 
  Normal Routing
   {
  
   localhost:2200/api/users       fetch all Users
   localhost:2200/api/user/:id       fetch with Useer ID
   }
   
   
   Using GraphQl 
   
      get User with ID
   query getUser($ID: Int!) {
     user(id: $ID) {
       id
       name
       username
       email
       phone
        address{
         ...getAddress
       }
     company{
       ...getCompany
     }
     }
   }
   
    get all Users
   query getUsers{
     users{
        id
       name
       username
       email
       phone
       address{
         ...getAddress
       }
        company{
       ...getCompany
     }
     }
   }
   
   
   Address fragment
   
fragment getAddress on Address{
   street 
    suite 
    city
    zipcode
}

  Company Fragment

fragment getCompany on Company{
  
      name
      catchPhrase
      bs
    
}
 
 
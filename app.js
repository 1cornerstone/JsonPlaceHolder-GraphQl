const express = require('express'),
    user_router = require('./src/route/getUsersRouter').UserRouter,
    graphQl = require('express-graphql'),
    Usercore = require('./src/core/userCore')
schema = require('./src/model/userSchema').schema;
app = express();

// fetch with  routing call
app.use('/api', user_router);

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


const Users = [];

 // get all the return Users list from Jsonplaceholder and assign it to

Usercore.getUsers().then(data => {
    Object.assign(Users, data);
}).catch(err => console.log(err));

function getUser(ID) {
    return Users.filter(el => el.id === ID.id)[0];
}

function getUsers() {
    return Users;
}

 //graphql resolver
let root = {
    user: getUser,
    users: getUsers
};

app.use('/graphQl', graphQl({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(2200, () => {
    console.log('graph Server is working')
});

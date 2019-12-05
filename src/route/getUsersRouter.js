const express = require('express'),
    router = express.Router(),
    userController= require('../controller/getUsersController');

router.get('/users', userController.Users);

router.get('/user/:id',userController.User)

module.exports.UserRouter = router;
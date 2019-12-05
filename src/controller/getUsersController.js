const userServices = require('../services/getUsersServices').getUsers();

module.exports.Users = (req, res) => {
    userServices.then(resp => resp.json())
        .then(data => {
            res.send(data)
        })
        .catch(err => res.send(err))

};

module.exports.User = (req, res) => {

    let id = parseInt(req.params.id);
    userServices.then(resp => resp.json())
        .then(data => {
            let User = data.filter(element => element.id === id);
            res.send(User);
        }).catch(err => res.send(err))

};


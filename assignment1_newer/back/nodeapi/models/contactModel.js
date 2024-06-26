'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    contactID: {
        type: String,
        Required: 'Please enter id'
    },
    firstName: {
        type: String,
        Required: 'Please enter fn'
    },
    lastName: {
        type: String,
        Required: 'Please enter ln'
    },
    mobile: {
        type: String,
        Required: 'Please enter mob'
    },
    email: {
        type: String,
        Required: 'Please enter em'
    },
    facebook: {
        type: String,
        Required: 'Please enter fb'
    },
    imgurl: {
        type: String,
        Required: 'Please enter img'
    }
});

var LoginSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter a username'
    },
    password: {
        type: String,
        Required: 'Please enter a password'
    }
});
//para 1 - connection's name
// 2 - schema's model
// 3 collection
module.exports = {
    User: mongoose.model('User', UserSchema, 'Contacts'),
    Login: mongoose.model('Login', LoginSchema, 'User')
};

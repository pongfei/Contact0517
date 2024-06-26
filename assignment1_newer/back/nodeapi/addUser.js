const mongoose = require('mongoose');
const crypto = require('crypto');
const { Login } = require('./models/contactModel'); // Adjust the path as necessary

mongoose.connect('mongodb+srv://pongsapak:Mongodb_123@cluster0.bjfzyrx.mongodb.net/ContactList', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Successfully connected'))
.catch(error => console.log(error));

const addUser = async () => {
    const encryptedPassword = crypto.createHash('md5').update('1234').digest('hex');
    console.log(`Adding user with encrypted password: ${encryptedPassword}`);

    const newUser = new Login({
        username: 'bob',
        password: encryptedPassword
    });

    try {
        const savedUser = await newUser.save();
        console.log('User added:', savedUser);
        mongoose.disconnect();
    } catch (error) {
        console.error('Error adding user:', error);
        mongoose.disconnect();
    }
};

addUser();

//console.log('Hello world')

const os = require('os');

const path = require('path');
const bcrypt = require('bcryptjs');


let myPlaintextPassword = "password";
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
    });
});
console.log(os.platform());
console.log(os.totalmem());
console.log(path.basename(__filename));
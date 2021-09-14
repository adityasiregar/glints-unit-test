const jwt = require('jsonwebtoken');

var privateKey = "helloworld123";

const verify = async (req, res, next) => {
    const token = req.headers["auth"]    
    jwt.verify(token, privateKey, (err, decoded)=> {

        if(err) {
            return res.status(401).send({
                err: err
            })
        }
        next();
    });
}

const generate = (payload) => {
    return jwt.sign(payload, privateKey, {
         algorithm: 'HS256',
         expiresIn: "1h"
    });
}

module.exports = {
    verify,
    generate
}
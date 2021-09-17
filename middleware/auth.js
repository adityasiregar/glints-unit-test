const jwt = require('jsonwebtoken');
const UserRoles = require("../models/index").UserRole;

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


const verifyAdmin = async (req, res, next) => {
    const token = req.headers["auth"]    

    if(token === undefined) {
        return res.status(401).send({
            err: "Forbidden"
        })
    }

    jwt.verify(token, privateKey, async (err, decoded)=> {  
        const id = decoded.id  
        const userRole = await UserRoles.findOne({
            where: {
                user_id: id
            }
        });

        if(err || userRole.role !== 'ADMIN') {
            return res.status(401).send({
                err: "Forbiden"
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
    generate,
    verifyAdmin
}
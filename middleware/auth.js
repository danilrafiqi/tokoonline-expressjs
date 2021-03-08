const {verifyJwt} = require("../utils")

module.exports=(req, res, next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        verifyJwt(token)
        next()
    } catch (error) {
        res.statusCode = 403
        res.send({
            message:'Token not valid',
        })
    }
}
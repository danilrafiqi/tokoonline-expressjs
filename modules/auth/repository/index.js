const { comparePassword, generateJwt } = require("../../../utils")

const table = 'users'
module.exports = (knex) => {
    module.register = (body) => {
        return knex.table(table).insert(body)
    }
    module.login = (email, password) => {
        return new Promise((resolve, reject)=>{
            knex.select()
            .where("email", email)
            .first()
            .table(table) 
            .then(data=>{
                if(data){
                    if(comparePassword(password, data.password)){
                        resolve({
                            accessToken: generateJwt({id:data.id})
                        })
                    }else{
                        reject({
                            message: "Authentication Failed"
                        })
                    }
                }else{
                    reject({
                        message: "Authentication Failed"
                    })
                }

            })
            .catch(err=> {
                console.log("asjaksjkas",err)
                reject(err)})
        }) 
    }
    return module
}

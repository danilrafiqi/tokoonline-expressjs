const { hashPassword } = require("../../../utils")

module.exports = (app, usecase)=> {
    const register = async(req, res)=>{
        try {
            const body = {
                name:req.body.name,
                email:req.body.email,
                password: hashPassword(req.body.password),
                phone:req.body.phone,
            }
            await usecase.register(body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    const login = async(req, res)=>{
        try {
            const data = await usecase.login(req.body.email, req.body.password)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }                
    }

    app.post("/register", register)
    app.post("/login", login)
}
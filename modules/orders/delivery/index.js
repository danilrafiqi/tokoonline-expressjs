const {hashPassword} = require('../../../utils')
const authMiddleware = require('../../../middleware/auth')
module.exports = (app, usecase)=> {
    const addCarts = async(req, res)=>{
        try {
            const body = {
                user_id: req.user.id,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
            }
            await usecase.addCarts(body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    const updateCartsById = async(req, res)=>{
        try {
            const body = {
                user_id: req.user.id,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
            }
            await usecase.updateCarts(req.params.id, body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }                
    }

    const deleteCartsById= async(req, res)=>{
        try {
            await usecase.deleteCarts(req.params.id)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    const deleteAllCarts= async(req, res)=>{
        try {
            await usecase.deleteAllCarts(req.user.id)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }


    const getAllCarts= async(req, res)=>{
        try {
            const data = await usecase.getAllCarts(req.user.id)
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    const getCartsById = async (req, res)=>{
        try {
            const data = await usecase.getCartsById(req.params.id)
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }        
    }   

    app.use(authMiddleware)
    app.post("/carts", addCarts)
    app.put("/carts/:id", updateCartsById)
    app.delete("/carts", deleteAllCarts)
    app.delete("/carts/:id", deleteCartsById)
    app.get("/carts", getAllCarts)
    app.get("/carts/:id", getCartsById)
}
// customer app
// add cart
// update cart (increment, decrement)
// delete cart
// delete all cart
// checkout
// retrieve cart
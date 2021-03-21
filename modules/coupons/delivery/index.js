module.exports = (app, usecase)=> {
    const getAllCoupons= async(_, res)=>{
        try {
            const data = await usecase.getAllCoupons()
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    const getCouponsById = async (req, res)=>{
        try {
            const data = await usecase.getCouponsById(req.params.id)
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }        
    }

    const createCoupons = async(req, res)=>{
        try {
            const body = {
                code:req.body.code,
                description:req.body.description
            }
            await usecase.createCoupons(body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    const updateCouponsById = async(req, res)=>{
        try {
            const body = {
                code:req.body.code,
                description:req.body.description
            }
            await usecase.updateCoupons(req.params.id, body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }                
    }

    const deleteCouponsById= async(req, res)=>{
        try {
            await usecase.deleteCoupons(req.params.id)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    app.get("/coupons", getAllCoupons)
    app.get("/coupons/:id", getCouponsById)
    app.post("/coupons", createCoupons)
    app.put("/coupons/:id", updateCouponsById)
    app.delete("/coupons/:id", deleteCouponsById)
}
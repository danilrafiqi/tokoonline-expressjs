module.exports = (app, usecase)=> {
    const getAllProducts= async(_, res)=>{
        try {
            const data = await usecase.getAllProducts()
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    const getProductsById = async (req, res)=>{
        try {
            const data = await usecase.getProductsById(req.params.id)
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }        
    }

    const createProducts = async(req, res)=>{
        try {
            const body = {
                title:req.body.title,
                description:req.body.description,
                price:req.body.price,
                image:req.body.image,
            }
            await usecase.createProducts(body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    const updateProductsById = async(req, res)=>{
        try {
            const body = {
                title:req.body.title,
                description:req.body.description,
                price:req.body.price,
                image:req.body.image,
            }
            await usecase.updateProducts(req.params.id, body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }                
    }

    const deleteProductsById= async(req, res)=>{
        try {
            await usecase.deleteProducts(req.params.id)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    app.get("/products", getAllProducts)
    app.get("/products/:id", getProductsById)
    app.post("/products", createProducts)
    app.put("/products/:id", updateProductsById)
    app.delete("/products/:id", deleteProductsById)
}
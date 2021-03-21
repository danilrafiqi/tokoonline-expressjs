module.exports = (app, usecase)=> {
    const getAllCategories= async(_, res)=>{
        try {
            const data = await usecase.getAllCategories()
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    const getCategoriesById = async (req, res)=>{
        try {
            const data = await usecase.getCategoriesById(req.params.id)
            res.send(data)
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }        
    }

    const createCategories = async(req, res)=>{
        try {
            const body = {
                name:req.body.name
            }
            await usecase.createCategories(body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    const updateCategoriesById = async(req, res)=>{
        try {
            const body = {
                name:req.body.name
            }
            await usecase.updateCategories(req.params.id, body)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }                
    }

    const deleteCategoriesById= async(req, res)=>{
        try {
            await usecase.deleteCategories(req.params.id)
            res.status(200).json({
                message: "success"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    app.get("/categories", getAllCategories)
    app.get("/categories/:id", getCategoriesById)
    app.post("/categories", createCategories)
    app.put("/categories/:id", updateCategoriesById)
    app.delete("/categories/:id", deleteCategoriesById)
}
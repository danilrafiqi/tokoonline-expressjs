const express = require("express")
const app = express()
const port = 4000
const knex = require('./knex');
app.use(express.json())
app.get("/", (req, res)=>{
    res.send({
        version: "0.0.1",
        author:"danilrafiqi",
    })
})
app.get("/products", (req, res)=>{
    knex.select().table("products").then(data=>{
        res.send({
            data,
        })
    })
})

app.post("/products", (req, res)=>{
    return knex.table('products').insert({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image,
    }).then(data=>{
        return res.send({
            data:[],
            message:"success"
        })
    })
})

app.put("/products/:id", (req, res)=>{
    return knex.table("products").where("id", req.params.id).update({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image,
    }).then(data=>{
        return res.send({
            data:[],
            message:"success"
        })
    })
})

app.delete("/products/:id", (req, res)=>{
    return knex.table('products').where("id", req.params.id).del().then(data=>{
        return res.send({
            data:[],
            message:"success"
        })
    })
})

//#region USER
app.get("/users", (req, res)=>{
    return knex.select().table("users").then(data=>{
        res.send({
            data
        })
    })
})

app.post("/users", (req , res)=>{
    return knex.table("users").insert({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
    }).then(()=>{
        res.send({
            data:[],
            message:"success"
        })
    })
})

app.put("/users/:id", (req , res)=>{
    return knex.table("users").where("id", req.params.id).update({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
    }).then(()=>{
        res.send({
            data:[],
            message:"success"
        })
    })
})

app.delete("/users/:id", (req, res)=>{
    return knex.table("users").where('id', req.params.id).del().then(()=>{
        res.send({
            data:[],
            message:"success"
        })
    })
})
//#endregion

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
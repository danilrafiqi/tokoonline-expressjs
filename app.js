const express = require("express")
const app = express()
const port = 4000
const knex = require('./knex');
const cors = require('cors')
const { hashPassword, generateJwt } = require("./utils");

app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
    res.send({
        version: "0.0.1",
        author:"danilrafiqi",
    })
})
//#region PRODUCT
app.get("/products", (req, res)=>{
    knex.select().table("products").then(data=>{
        res.send({
            data,
        })
    })
})

app.get("/products/:id", (req, res)=>{
    knex.select().where("id", req.params.id).table("products").then(data=>{
        res.send(data[0])
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
//#endregion
//#region USER
app.get("/users", (req, res)=>{
    return knex.select().table("users").then(data=>{
        res.send({
            data
        })
    })
})

app.get("/users/:id", (req, res)=>{
    return knex.select().where("id", req.params.id).table("users").then(data=>{
        res.send(data[0])
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
    }).catch(err=>{
        res.statusCode = 500
        res.send({
            message:"email already register"
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
    return knex.table("users").where('id', req.params.id).del().then((res)=>{
        console.log("ssasa",res)
        res.send({
            data:[],
            message:"success"
        })
    }).catch(err=>{
        console.log("ini errr",err)
        res.statusCode = 500
        res.send({
            message:"email already register"
        })
    })
})
//#endregion

//#region AUTH
app.post("/register", (req , res)=>{
    return knex.table("users").insert({
        name:req.body.name,
        email:req.body.email,
        password: hashPassword(req.body.password),
        phone:req.body.phone,
    }).then(()=>{
        res.send({
            data:[],
            message:"success"
        })
    }).catch(err=>{
        res.statusCode = 500
        res.send({
            message:"email already register"
        })
    })
})

app.post("/login", (req , res)=>{
    return knex.select()
    .where("email", req.body.email)
    .where("password", hashPassword(req.body.password))
    .table("users").then(data=>{
        res.send({
            accessToken: generateJwt({id:data[0].id})
        })
    })
})
//#endregion

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
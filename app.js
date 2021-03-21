const express = require("express")
const app = express()
const port = 4000
const knex = require('./knex');
const cors = require('cors')
const { hashPassword, generateJwt, comparePassword } = require("./utils");
const authMiddleware = require('./middleware/auth');
const delivery = require('./modules/delivery');
const repository = require("./modules/repository");
const usecase = require("./modules/usecase");

app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
    res.send({
        version: "0.0.1",
        author:"danilrafiqi",
    })
})

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
    .table("users").then(data=>{
        console.log(req.body.password, data[0].password)
        if(comparePassword(req.body.password, data[0].password)){
            res.send({
                accessToken: generateJwt({id:data[0].id})
            })
        }else{
            res.statusCode = 401
            res.send({
                message: "gagal"
            })
        }
    })
})
//#endregion

// app.use(authMiddleware)

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
    return knex.table("users").where('id', req.params.id).del().then((data)=>{
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

//#region CATEGORIES
const categoriesRepo = repository.newCategoriesRepository(knex)
const categoriesUseCase = usecase.newCategoriesUseCase(categoriesRepo)
delivery.newCategoriesController(app, categoriesUseCase)
//#region 

//#region COUPON
app.get("/coupons", (req, res)=>{
    return knex.select().table("coupons").then(data=>{
        res.json(data)
    }).catch(err=>{
        res.statusCode = 500,
        res.json({
            code:5001,
            message:"failed to get coupons"
        })
    })
})

app.get("/coupons/:id", (req, res)=>{
    return knex.select().where('id', req.params.id).table("coupons").then(data=>{
        res.json(data[0])
    }).catch(err=>{
        res.statusCode = 500,
        res.json({
            code:5001,
            message:"failed to get coupons"
        })
    })
})

app.post("/coupons", (req, res)=>{
    return knex.insert({
        code:req.body.code,
        description:req.body.description,
    }).table("coupons").then(data=>{
        res.json({
            code:2000,
            message:"success to create coupons"
        })
    }).catch(err=>{
        res.statusCode = 500,
        res.json({
            code:5001,
            message:"failed to create coupons"
        })
    })
})

app.put("/coupons/:id", (req, res)=>{
    return knex.update({
        code:req.body.code,
        description:req.body.description,
    }).table("coupons").where('id', req.params.id).then(data=>{
        res.json({
            code:2000,
            message:"success to update coupons"
        })
    }).catch(err=>{
        res.statusCode = 500,
        res.json({
            code:5001,
            message:"failed to update coupons"
        })
    })
})

app.delete("/coupons/:id", (req, res)=>{
    return knex.delete().table("coupons").where('id', req.params.id).then(data=>{
        res.json({
            code:2000,
            message:"success to delete coupons"
        })
    }).catch(err=>{
        res.statusCode = 500,
        res.json({
            code:5001,
            message:"failed to delete coupons"
        })
    })
})

//#endregion


app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
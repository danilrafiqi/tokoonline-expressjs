const express = require("express")
const app = express()
const port = 4000
const knex = require('./knex');
const cors = require('cors')
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
// app.use(authMiddleware)

//#region AUTH
const authRepo = repository.newAuthRepository(knex)
const authUseCase = usecase.newAuthUseCase(authRepo)
delivery.newAuthController(app, authUseCase)
//#region 

//#region CATEGORIES
const categoriesRepo = repository.newCategoriesRepository(knex)
const categoriesUseCase = usecase.newCategoriesUseCase(categoriesRepo)
delivery.newCategoriesController(app, categoriesUseCase)
//#region 

//#region COUPONS
const couponsRepo = repository.newCouponsRepository(knex)
const couponsUseCase = usecase.newCouponsUseCase(couponsRepo)
delivery.newCouponsController(app, couponsUseCase)
//#region 

//#region PRODUCTS
const productsRepo = repository.newProductsRepository(knex)
const productsUseCase = usecase.newProductsUseCase(productsRepo)
delivery.newProductsController(app, productsUseCase)
//#region 

//#region USERS
const usersRepo = repository.newUsersRepository(knex)
const usersUseCase = usecase.newUsersUseCase(usersRepo)
delivery.newUsersController(app, usersUseCase)
//#region 

//#region CARTS
const cartsRepo = repository.newCartsRepository(knex)
const cartsUseCase = usecase.newCartsUseCase(cartsRepo)
delivery.newCartsController(app, cartsUseCase)
//#region 

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
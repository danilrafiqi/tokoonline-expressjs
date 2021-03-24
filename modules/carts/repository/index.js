const table = 'carts'
var knexnest = require('knexnest');

module.exports = (knex) => {
    module.addCarts = (body) => {
        return knex.table(table).insert(body)
    }
    module.updateCarts = (id, body) => {
        return knex.table(table).where("id", id).update(body)
    }
    module.deleteCarts = (id) => {
        return knex.table(table).where("id", id).del()
    }
    module.deleteAllCarts = (userId) => {
        console.log("user",userId)
        return knex.table(table).where("user_id", userId).del()
    }
    module.getAllCarts=(userId)=>{
        const knexSql = knex.select(
            'carts.id as _id',
            'carts.quantity as _quantity',
            'products.id as _product_id',
            'products.title as _product_title',
            'products.description as _product_description',
            'products.image as _product_image',
            'products.price as _product_price',
        ).where("user_id", userId).table(table)
        .innerJoin("products", 'carts.product_id','=', 'products.id')
        return knexnest(knexSql)
    }
    module.getCartsById = (id) => {
        const knexSql = knex.select(
            'carts.id as _id',
            'carts.quantity as _quantity',
            'products.id as _product_id',
            'products.title as _product_title',
            'products.description as _product_description',
            'products.image as _product_image',
            'products.price as _product_price',
        ).where("carts.id", id).table(table)
            .innerJoin("products", 'carts.product_id','=', 'products.id')
        return knexnest(knexSql)
    }
    return module
}


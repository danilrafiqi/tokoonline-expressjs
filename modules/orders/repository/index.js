const tableHeader = 'orders_header'
const tableDetail = 'orders_detail'

var knexnest = require('knexnest');

// {
//     address_id
//     coupon_id
//     total
//     cart:cart_id[]
// }
module.exports = (knex) => {
    module.checkout = (body) => {
        knex.transaction(function(trx) {
            carts = body.cart
            return trx
              .insert({
                  total: body.total,
                  address_id: body.address_id,
                  user_id: body.user_id,
                  coupon_id: body.coupon_id,
                })
              .into(tableHeader)
              .then((ids) =>{
                const newCart = carts.map((cart) => {
                    return {
                        order_id:ids[0],
                        cart_id: cart
                    }
                });
                return trx(tableDetail).insert(newCart);
            });
        })
    }

    module.getAllOrdersByUsersId=(userId)=>{
        const knexSql = knex.select(
            'orders_header.id as _id',
            'orders_header.total as _total',
            'addresses.id as _address_id',
            'addresses.address as _address_address',
            'coupons.id as _coupon_id',
            'coupons.description as _coupon_description',
            'coupons.percentage as _coupon_percentage',
            'coupons.fixedDiscount as _coupon_fixedDiscount',
        ).where("orders_header.user_id", userId).table(tableHeader)
        // .innerJoin(tableDetail, 'orders_detail.order_id','=', 'orders_header.id')
        .innerJoin("addresses", 'addresses.id','=', 'orders_header.address_id')
        .innerJoin("coupons", 'coupons.id','=', 'orders_header.coupon_id')
        return knexnest(knexSql)

    }
    // module.getCartsById = (id) => {
    //     const knexSql = knex.select(
    //         'carts.id as _id',
    //         'carts.quantity as _quantity',
    //         'products.id as _product_id',
    //         'products.title as _product_title',
    //         'products.description as _product_description',
    //         'products.image as _product_image',
    //         'products.price as _product_price',
    //     ).where("carts.id", id).table(tableHeader)
    //         .innerJoin("products", 'carts.product_id','=', 'products.id')
    //     return knexnest(knexSql)
    // }
    // module.updateCarts = (id, body) => {
    //     return knex.table(tableHeader).where("id", id).update(body)
    // }
    // module.deleteCarts = (id) => {
    //     return knex.table(tableHeader).where("id", id).del()
    // }
    // module.deleteAllCarts = (userId) => {
    //     console.log("user",userId)
    //     return knex.table(tableHeader).where("user_id", userId).del()
    // }
    return module
}


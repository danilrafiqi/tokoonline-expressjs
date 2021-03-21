const table = 'coupons'
module.exports = (knex) => {
    module.getAllCoupons=()=>{
        return knex.select().table(table)
    }
    module.getCouponsById = (id) => {
        return knex.select().where("id", id).first().table(table)
    }
    module.createCoupons = (body) => {
        return knex.table(table).insert(body)
    }
    module.updateCoupons = (id, body) => {
        return knex.table(table).where("id", id).update(body)
    }
    module.deleteCoupons = (id, body) => {
        return knex.table(table).where("id", id).del()
    }
    return module
}

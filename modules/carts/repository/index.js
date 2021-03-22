const table = 'carts'
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
        return knex.select().where("user_id", userId).table(table)
    }
    module.getCartsById = (id) => {
        return knex.select().where("id", id).table(table)
    }
    return module
}


const table = 'products'
module.exports = (knex) => {
    module.getAllProducts=()=>{
        return knex.select().table(table)
    }
    module.getProductsById = (id) => {
        return knex.select().where("id", id).first().table(table)
    }
    module.createProducts = (body) => {
        return knex.table(table).insert(body)
    }
    module.updateProducts = (id, body) => {
        return knex.table(table).where("id", id).update(body)
    }
    module.deleteProducts = (id, body) => {
        return knex.table(table).where("id", id).del()
    }
    return module
}

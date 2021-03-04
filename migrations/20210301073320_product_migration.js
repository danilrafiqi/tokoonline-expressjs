
exports.up = function(knex) {
    return knex.schema
        .createTable('products', function (table) {
            table.increments('id');
            table.string('title', 255).notNullable();
            table.string('description', 255).notNullable();
            table.string('image', 255).notNullable();
            table.decimal('price').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("products")
};

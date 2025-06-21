/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('whatsapp') // opcional
    table.string('email').notNullable().unique()
    table.date('date_of_birth') // opcional
    table.string('document') // opcional
    table.string('password').notNullable()
    table.enu('status', ['ativo', 'inativo']).defaultTo('ativo')
    table.integer('is_admin').defaultTo(0)
    table.timestamps(true, true) // created_at e updated_at com defaults
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
}

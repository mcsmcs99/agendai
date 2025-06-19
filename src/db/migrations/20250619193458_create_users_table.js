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
    table.boolean('status').defaultTo(true)
    table.boolean('is_admin').defaultTo(false)
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

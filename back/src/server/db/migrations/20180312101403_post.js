exports.up = (knex, Promise) => {
  return knex.schema.createTable('post', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('content').notNullable();
    table.string('created').notNullable();
    table.boolean('active').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('post');
};
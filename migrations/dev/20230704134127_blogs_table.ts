import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("blogs", (table) => {
    table.increments("blog_id").primary().notNullable();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("category").notNullable();
    table.boolean("is_deleted").defaultTo(false).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updated_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("blogs");
}

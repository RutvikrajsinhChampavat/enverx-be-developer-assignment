import { Model } from "objection";
const knex = require("../../knex");

Model.knex(knex);

class Blog extends Model {
  title!: string;
  category!: string;
  description!: string;
  is_deleted!: boolean;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "blogs";
  }

  static get idColumn() {
    return "blog_id";
  }

  $beforeInsert(): void | Promise<any> {
    this.created_at = new Date();
  }

  $beforeUpdate(): void | Promise<any> {
    this.updated_at = new Date();
  }

  $beforeDelete(): void | Promise<any> {
    this.is_deleted = true;
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        blog_id: { type: "integer" },
        title: { type: "string" },
        category: { type: "string" },
        description: { type: "string" },
        is_deleted: { type: "boolean" },
      },
    };
  }
}

export default Blog;

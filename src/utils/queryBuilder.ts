import { ColumnRef, OrderByDirection, QueryBuilder } from "objection";
import Blog from "../models/blog";

interface CreateQuery {
  query: QueryBuilder<Blog, Blog[]>;
  search: string;
  search_field: ColumnRef;
  sort_by: ColumnRef;
  sort_order: OrderByDirection;
}
const queryBuilder = (params: CreateQuery) => {
  const { query, search, search_field, sort_by, sort_order } = params;

  if (sort_by) {
    query?.orderBy(sort_by, sort_order);
  }

  if (search) {
    query?.where(`${search_field}`, "like", `%${search}%`);
  }

  return query;
};

export default queryBuilder;

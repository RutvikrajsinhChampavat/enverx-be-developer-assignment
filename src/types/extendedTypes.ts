import { ColumnRef, OrderByDirection } from "objection";

export interface RequestParams {
  id?: number;
}

export interface ReqQuery {
  page?: string;
  per_page?: string;
  sort_by?: ColumnRef;
  sort_order?: OrderByDirection;
  search?: string;
  search_field?: ColumnRef;
}

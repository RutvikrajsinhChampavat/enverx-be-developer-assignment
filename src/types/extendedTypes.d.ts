interface RequestParams extends ParamsDictionary {
  id?: number;
}

interface ReqQuery extends QueryString.ParsedQs {
  page?: string;
  per_page?: string;
  sort_by?: ColumnRef;
  sort_order?: OrderByDirection;
  search?: string;
  search_field?: ColumnRef;
}

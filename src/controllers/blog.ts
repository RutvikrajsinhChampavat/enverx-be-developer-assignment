import { Request, Response } from "express";
import httpStatusCode from "../constants/httpStatusCode";
import Blog from "../models/blog";
import queryBuilder from "../utils/queryBuilder";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { body }: { body: CREATE_BLOG_BODY } = req;

    const { title, category, description } = body;

    const newBlog = await Blog.query().insert({
      title: title,
      category: category,
      description: description,
    });

    const blog = await Blog.query().findById(newBlog.$id());

    return res
      .status(httpStatusCode.CREATED)
      .json({ message: "Blogs created successfully!", data: blog });
  } catch (error) {
    return res
      .status(error.code || httpStatusCode.SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const { query }: { query: ReqQuery } = req;

    const {
      sort_by = "created_at",
      sort_order = "asc",
      search,
      search_field,
    } = query;

    const getBlogsQuery = Blog.query().where({ is_deleted: false });

    const newQuery = queryBuilder({
      query: getBlogsQuery,
      search: search,
      search_field: search_field,
      sort_by: sort_by,
      sort_order: sort_order,
    });

    const blogs = await newQuery.select();

    return res
      .status(httpStatusCode.SUCCESS)
      .json({ message: "Blogs fetched successfully!", data: blogs });
  } catch (error) {
    return res
      .status(error.code || httpStatusCode.SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const getBlogByID = async (req: Request, res: Response) => {
  try {
    const { params }: { params: RequestParams } = req;

    const blog = await Blog.query().findById(params?.id).andWhere({
      is_deleted: false,
    });

    return res
      .status(httpStatusCode.SUCCESS)
      .json({ message: "Blog fetched successfully!", data: blog });
  } catch (error) {
    return res
      .status(error.code || httpStatusCode.SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const {
      params,
      body,
    }: {
      params: RequestParams;
      body: UPDATE_BLOG_BODY;
    } = req;

    await Blog.query()
      .findById(params?.id)
      .andWhere({
        is_deleted: false,
      })
      .patch(body);

    const updatedBlog = await Blog.query().findById(params?.id);

    return res
      .status(httpStatusCode.CREATED)
      .json({ message: "Blog updated successfully!", data: updatedBlog });
  } catch (error) {
    return res
      .status(error.code || httpStatusCode.SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const {
      params,
    }: {
      params: RequestParams;
    } = req;

    await Blog.query()
      .findById(params?.id)
      .andWhere({
        is_deleted: false,
      })
      .patch({
        is_deleted: true,
      });

    return res
      .status(httpStatusCode.SUCCESS)
      .json({ message: "Blog deleted successfully!" });
  } catch (error) {
    return res
      .status(error.code || httpStatusCode.SERVER_ERROR)
      .json({ error: error.message });
  }
};

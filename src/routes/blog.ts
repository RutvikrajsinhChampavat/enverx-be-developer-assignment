import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogByID,
  getBlogs,
  updateBlog,
} from "../controllers/blog";
import {
  createBlogBodyValidation,
  updateBlogBodyValidation,
} from "../validations/bodyValidations";

const router = Router();

router.route("/").post(createBlogBodyValidation, createBlog).get(getBlogs);

router
  .route("/:id")
  .get(getBlogByID)
  .put(updateBlogBodyValidation, updateBlog)
  .delete(deleteBlog);
export default router;

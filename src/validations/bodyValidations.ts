import { NextFunction, Request, Response } from "express";
import httpStatusCode from "../constants/httpStatusCode";

export const createBlogBodyValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body }: { body: CREATE_BLOG_BODY } = req;

  const { title, category, description } = body;

  if (!title || !category || !description) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Please provide all the required filed!" });
  }

  if (typeof title !== "string") {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Title must be of type sting!" });
  }

  if (typeof category !== "string") {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Category must be of type sting!" });
  }

  if (typeof description !== "string") {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Description must be of type sting!" });
  }

  if (title.length < 2) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Title must be atleast 2 characters long!" });
  }

  if (category.length < 2) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Category must be atleast 2 characters long!" });
  }

  if (description.length < 5) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Description must be atleast 5 characters long!" });
  }

  return next();
};

export const updateBlogBodyValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body }: { body: CREATE_BLOG_BODY } = req;

  const { title, category, description } = body;

  if (!title || !category || !description) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Please provide all the required filed!" });
  }

  if (typeof title !== "string") {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Title must be of type sting!" });
  }

  if (typeof category !== "string") {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Category must be of type sting!" });
  }

  if (typeof description !== "string") {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Description must be of type sting!" });
  }

  if (title.length < 2) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Title must be atleast 2 characters long!" });
  }

  if (category.length < 2) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Category must be atleast 2 characters long!" });
  }

  if (description.length < 5) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .json({ message: "Description must be atleast 5 characters long!" });
  }

  return next();
};

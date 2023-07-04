import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

import blogRouter from "./routes/blog";

dotenv.config();

if (!process.env.SERVER_PORT) {
  process.exit(1);
}

const app: Express = express();

const PORT = process.env.SERVER_PORT;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/api/v1", (_req: Request, res: Response) =>
  res.status(200).json({ message: `Server listening at PORT ${PORT}!` })
);

app.use("/api/v1/blogs", blogRouter);

app.use("*", (_req: Request, res: Response) => {
  res.status(400).json({ message: "Invalid request URL!" });
});

app.listen(PORT, () => console.log(`Server spinning on PORT : ${PORT}`));

module.exports = app;

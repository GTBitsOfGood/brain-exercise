import express, { Request, Response } from "express";
import { defaultRouter } from "./routes";

const app = express();

const PORT = 8080;

app.get("/status", (req: Request, res: Response) => {
  res.send("Service is running!");
});

app.use(defaultRouter);

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});

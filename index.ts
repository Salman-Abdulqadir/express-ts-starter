import express, { Request, Response } from "express";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});

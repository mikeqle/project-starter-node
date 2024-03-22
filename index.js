import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use("/api", router);

const PORT = process.env.PORT || 3899;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

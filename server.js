import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

export const app = express();

app.use(express.json());

app.use(taskRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;

import express from "express";
import routes from "./routes/index";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`O servidor está executando em http://localhost:${PORT}`);
});

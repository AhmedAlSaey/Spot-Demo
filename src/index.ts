import express from "express";
import swaggerUi from "swagger-ui-express";
import { createUserController } from "./controllers/create-user/controller";

const app = express();
app.use(express.json());

app.post("/users", createUserController);

const swaggerDocument = require("../specs/spot.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let port = 3000;
console.log(`Listening on port ${port}`);
console.log(`URL: http://localhost:${port}/`);
app.listen(port);

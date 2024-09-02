import { Response, Request } from "express";
import router from "./routes/indexRouter";



const express = require("express");
const bodyParser = require("body-parser");
 const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(router);
app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});

const express = require("express");
const db = require("./src/databases/database");

const app = express();
const port = 3000;

const router = require("./src/routes/index");
const travellerRouter = require("./src/routes/traveller");
const senderRouter = require("./src/routes/sender");

db.authenticate();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/api/v1", router);
app.use("/api/v1", senderRouter);
app.use("/api/v1", travellerRouter);

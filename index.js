const express = require("express");
const initializeFirebaseSDK = require("./startup/firebase");
const clientRouter = require("./routes/client");
const error = require("./middlewares/error");
const app = express();

//Startups
// require("./startup/logging")();
// require("./startup/db")();
initializeFirebaseSDK();

//Api Routes
app.use("/api/client", clientRouter);

app.use(error);

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

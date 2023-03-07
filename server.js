const exp = require("express");
const app = exp();
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const userApi = require("./API/UserApi");

//connect to mongo Atlas using mongoose
mongoose.connect(process.env.DB_URL);

//get db connection
const db = mongoose.connection;

//connect frontend with backend
app.use(exp.static(path.join(__dirname, "./build/")));

//assign path
app.use("/user", userApi);

// handling error for correct path
app.use((err, req, resp, next) => {
  resp.send({ message: "error", payload: err.message });
});

//dealing with page refresh
app.use("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./build/index.html"));
});

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

db.on("open", () => console.log("db connection successful"));
db.on("error", (err) => console.log("db connection failed", err));

app.listen(process.env.PORT, () =>
  console.log(`server is running on port number ${process.env.PORT}....`)
);

console.log("Server working");
import express from "express";

import mongoose from "mongoose";

import Mongostore from "connect-mongo";

import session from "express-session";
import isValidUser from "./middlewares/validate.js";
import router from "./routes/routes.js";
const uri =
  "mongodb+srv://cherrykapoor19:f1mQpiEnLDYoWeDc@cluster0.gstqrb7.mongodb.net/CostcoUsers?retryWrites=true&w=majority";
const app = express();

const session_store = Mongostore.create({
  mongoUrl: uri,
  dbName: "CostcoUsers",
  collectionName: "CostcoSessions",
});
app.use(
  session({
    secret: "A secret key to sign the cookie",
    saveUninitialized: false,
    resave: false,
    store: session_store,
  })
);
app.listen(9091, () => {
  console.log("Listening on port http://localhost:9091/home");
});

app.set("view-engine", "ejs");
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(` App is listening to port ${PORT}`);
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/login", (req, res) => {
  req.session.isValid = true;
  console.log(req.session);

  res.render("login.ejs");
});

//adding middleware to dashboard Route
//to restrict the user from accessing the dashboard page
//only the logged user having session will be visting
//the dashboard page
app.get("/dashboard", isValidUser, (req, res) => {
  res.render("dashboard.ejs");
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/home");
  });
  console.log(req.session);
});

app.use("/", router);

export default session;

const express = require("express");
const app = express();
const mysql = require("mysql");
const myconnection = require("express-myconnection");
const optiondb = {
  host: "localhost",
  user: "farid",
  password: "",
  port: 8889,
  database: "todolist",
};
const port = 3000;
app.use(myconnection(mysql, optiondb, "pool"));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/home", function (req, res) {
  req.getConnection((err, conn) => {
    if (err) {
      console.log(err);
    } else {
      conn.query("SELECT * FROM todolist_db", [], (error, resultat) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).render("index.ejs", { resultat });
        }
      });
    }
  });
});

app.get("/activites", function (req, res) {
  res.status(200).render("activites.ejs");
});
app.get("/equipe", function (req, res) {
  res.status(200).render("equipe.ejs");
});
app.get("/planing", function (req, res) {
  res.status(200).render("planing.ejs");
});
app.get("/contact", function (req, res) {
  res.status(200).render("contact.ejs");
});
app.get("/", function (req, res) {
  res.status(301).redirect("/home");
});
app.use((req, res) => {
  res.status(404).render("404.ejs");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

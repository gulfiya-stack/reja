console.log('Web serverni boshlash');
const express = require ("express");
const http = require("http");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});
// 1 - Kirish code
app.use(express.static('public')); //CSS, images joylash
app.use(express.json()); //Kirib kelayotgan client va web-server ortasidagi json format data objectga o'giradi
app.use(express.urlencoded({extended:true})); // HTML form requestdan expressga qabul qilish

//2: Session code

//3: Views code
// BSSR - Backend Side Server Rendering - Backend-->Frontend yaratish
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.post("/create-item", (req, res) => {
    // TODO: Code with DB here
    // console.log(req.body);
    // res.json({test: "success"});
});
app.get("/", function(req, res) {
    res.render("harid");
});
app.get("/author", (req, res) => {
    res.render("author", {user: user});
});
// app.get("/", function (req, res){
//     res.end(`<h1 style="background:pink">HELLO WORLD by Guli</h1>`);
// });
// app.get("/main", function (req, res){
//     res.end("<h1>You are on the main page</h1>");
// });
// app.get("/gift", function (req, res){
//     res.end("<h1>You are on gifts page</h1>");
//});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`The server is running successfully on port ${PORT}`);
});
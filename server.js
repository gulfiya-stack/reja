const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const http = require("http");
const mongodb = require("mongodb");

let db;

const connectionString =
    "mongodb+srv://guli-stack:YOUR_PASSWORD@cluster0.lkjwjb0.mongodb.net/Reja?authSource=admin";

mongodb.MongoClient.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.log("ERROR on connection MongoDB", err);
        } else {
            console.log("MongoDB connection succeed");

            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);

            let PORT = 3000;

            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);
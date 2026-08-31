require("dotenv").config({ path: "./src/.env" });

const app = require("./src/app")
const connectDB = require("./src/db/db")


const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

connectDB()
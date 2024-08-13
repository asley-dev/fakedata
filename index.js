const exspress = require("express");
const cors = require("cors");
const app = exspress();
app.use(cors());
const port = process.env.PORT || 3000;
const {readdirSync} = require("fs");
require("dotenv").config();

console.log(readdirSync("./routes"));

readdirSync("./routes").map((file) => app.use("/", require("./routes/"+file)));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server running to port ${port}`);
});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// const mongoose = require("../db/mongoose");
require("../db/mongoose")(app);
require('./handler')(app);
app.use(morgan("dev"));


app.use("/file", express.static("./file/"));



app.get("/", (req, res) => {
    res.status(200).json({
        message:"Arise Mern Developers"
    })

});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});


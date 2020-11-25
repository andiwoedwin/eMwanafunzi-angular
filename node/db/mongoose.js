const mongoose = require("mongoose");
const e = require("express");
const { SIGHUP } = require("constants");

module.exports = app => {
    mongoose.connect("mongodb+srv://Andiwo:AndiwoEdwin@cluster0.gzjwz.mongodb.net/cart?retryWrites=true&w=majority", {
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((res) => { console.log("we connected to the db")})
    .catch((err) => {
        console.log(err)
    })

    mongoose.Promise = global.Promise;

    process.on("SIGNT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);

    if(app){
        app.set("mongoose", mongoose)
    }

    function cleanup(){
        mongoose.connection.close(() => {
            process.exit(0);
        })
    }
    
}
const mongoose = require("mongoose");
// mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.zygzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.connect('mongodb+srv://anshul:codingNinjas@cluster0.eotyipm.mongodb.net/getPlaced?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;

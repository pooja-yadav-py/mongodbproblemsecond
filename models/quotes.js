//step 1: import schema from mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//step2: Writing the schema
const quotesSchema = new Schema(
    {
    quote: String,
    author: String
    },
    { collection: "quotesdetails" }
    );

 //step3: export the schema
 module.exports = mongoose.model("quotesdetails", quotesSchema);
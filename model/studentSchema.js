const mong = require("mongoose");
const studentSchema = new mong.Schema({
    "name":{type:String},
    "email":{type:String},
    "rollNo":{type:Number}
},{
    collection:"students"
})

module.exports = mong.model("studentSchema",studentSchema);
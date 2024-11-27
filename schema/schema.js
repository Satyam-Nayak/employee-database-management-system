const { model,Schema } = require("mongoose")
const cnt_Schema= new Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    nmbr:{
        type: Number,
        required:true
    },
    loc:{
        type:String,
        required:true,
        enum:['mobile','sim','email']

    }
},{timestamps:true}
)
module.exports=model('cnt_Schema',cnt_Schema,'cnt_Schema')
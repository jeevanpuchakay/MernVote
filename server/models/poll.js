const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

const optionSchema=new mongoose.Schema({
    options:String,
    votes:{
        type:Number,
        default:0
    }
});

const pollSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    question :{
        type:String
    },
    options:[optionSchema],
    voted:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    created:{
        type:Date,
        default:Date.now,
    },
    polls:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Poll'
    }]
});



module.exports=mongoose.model('Poll',pollSchema);
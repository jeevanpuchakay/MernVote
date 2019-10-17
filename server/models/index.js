const mongoose=require('mongoose');
require('dotenv').config();

mongoose.set('debug',true);

mongoose.Promise=global.Promise;
const uri=process.env.URI;


const connection=mongoose.connection;

mongoose.connect(uri,{
    useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true
});


connection.once('open',()=>{
    console.log("Mongodb Database connection established")
});

module.exports.User= require('./user')
module.exports.Poll=require('./poll')

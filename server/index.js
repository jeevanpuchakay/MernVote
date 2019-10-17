require('dotenv').config();

const expres=require('express');

const cors=require('cors');
const bodyParser=require('body-parser');
const handle=require('./handlers')
const routes =require('./routes'); 


const app=expres();

const db=require('./models')

app.use(cors());
app.use(bodyParser.json()); 
app.get('/',(req,res)=>res.send('helloworld'));
app.use('/api/auth',routes.auth); 


const port= process.env.PORT;


app.use(handle.notfound);

app.use(handle.errors)
app.listen(port,console.log(`server strated on ${port}`));

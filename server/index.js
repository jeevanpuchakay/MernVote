const expres=require('express');

const app=expres();

const handle=require('./handlers')
app.get('/',(req,res)=>res.send('helloworld'));

const port= 4000;

app.use(handle.notfound);

app.use(handle.errors)
app.listen(port,console.log(`server strated on ${port}`));

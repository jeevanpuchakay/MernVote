const expres=require('express');

const app=expres();

app.get('/',(req,res)=>res.send('helloworld'));

const port= 4000;
app.listen(port,console.log(`server strated on ${port}`));

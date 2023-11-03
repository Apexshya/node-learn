


const express=require('express');
const http=require('http')

const app=express();
const port=8000;
app.get('/', (req, res)=>{
    res.send('Hello world');

});

app.get('/nextRoute',(req,res)=>{
    res.send("this is my another route")
})




app.listen(port, ()=>{

    return console.log(`Express is listening at localhost:${port}`)

})
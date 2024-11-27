// package.json
//server.js
// .env

const express = require('express')
const app = express()
// const mongoose= require('mongoose')
const {connect}= require('mongoose')
let {PORT,MONGODB_URI} = require('./config/index')
const {engine}=require('express-handlebars')
const routing= require('./router/router')


app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.use(express.urlencoded({extended:true}))


let connectDb = async()=>{
    await connect(MONGODB_URI)
    console.log("mongodb connected")
}
connectDb()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/home',(req,res)=>{
    res.render('home',{title:'Home Page'})
})


app.use('/api',routing)


app.listen(PORT || 5000,err=>{
    if(err) throw err;
    console.log('server is running on port 5000')
})
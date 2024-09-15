const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

//const url='mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101'
//const url = 'mongodb://127.0.0.1:27017/cbit';
const url = 'mongodb+srv://eegasai67:9390898395@mern.wk33n.mongodb.net/?retryWrites=true&w=majority&appName=mern';
const app=express()
mongoose.connect(url)
const con=mongoose.connection
con.on('open',()=>
{
    console.log('connected...')
})
app.use(cors())
app.use(express.json())
const alienRouter=require('./Routes/aliens')
app.use('/aliens',alienRouter)
app.listen(9000,()=>
{
    console.log('server started..')
})
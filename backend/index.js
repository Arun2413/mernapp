const express = require('express')
const app = express()
const mongo = require('mongoose')
const url = "mongodb://localhost:27017/sch"
const sch = require('./sch')
mongo.set('strictQuery',true)
const cors = require('cors')

app.use(express.json())
app.use(cors());

app.get('/',async(req,res)=>{
    const a = await sch.find()
    res.json(a)
})

app.post('/', async(req,res)=>{
    const b = await new sch({
        email:req.body.email,
        password:req.body.password,
        age:req.body.age,
        // date:req.body.date
    })
    b.save()
    res.json('added success fully')
})

app.get('/:id', async(req,res)=>{
    const c = await sch.findById(req.params.id)
    res.json(c)
})

app.patch('/:id', async(req,res)=>{
    const d = await sch.findById(req.params.id)
    d.email = req.body.email,
    d.password = req.body.password,
    d.age = req.body.age,
    d.date = req.body.date
    d.save()
    res.json('updated')
})

app.delete('/:id',async(req,res)=>{
    await sch.findByIdAndDelete(req.params.id)
    res.json('removed')
})

app.listen(24,()=>{
    console.log('run success fully')
})
mongo.connect(url,(err)=>{
    if(err){
        console.log(err)
        console.log('err')
    }
    else{
        console.log('connectde successfully')
    }
})
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 6000
const app = express()
const connectDB = require('./connection/connectDB')
const Product = require('./models/Product')
const Category = require('./models/Category')


const multer = require('multer')
connectDB()
app.use(express.urlencoded({extended:true}))
app.use("/uploads",express.static("uploads"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/uploads",express.static("uploads"))



app.get('/', async (req,res)=>{
    try {


    const data = await Product.find({})
    res.json(data)
    } catch (error) {
    res.status(500).json({error:'error while fetching data'})    
    }
})

app.get('/category', async (req,res)=>{
  try {


  const data = await Category.find()
  res.json(data)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})


app.get('/:id', async (req,res)=>{
  try {
  const {id}= req.params
  const data = await Product.findById(id)
  res.status(200).json(data)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})


app.get('/category/:id', async (req,res)=>{
  try {
   const {id} = req.params


  const data = await Category.findById(id)
  res.json(data)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})




app.put('/category/:id', async (req,res)=>{
  try {
    const {id} =req.params
    const {category,description,status}=req.body
    console.log(id)
console.log(category,description,status)
  const data = await Category.findByIdAndUpdate(id,{category,description,status},{new:true}
 
  )
  res.status(200).json(data)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})






app.put('/:id',async (req,res)=>{
  try {
   console.log(req.body)
      const {id} =req.params
      const {name,packsize,mrp,category,status,} = req.body
      const updateproduct = ({name,packsize,mrp,category,status})
      await Product.findByIdAndUpdate(id,updateproduct)
      res.status(201).json(updateproduct)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})














const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname);
  }
})

const upload = multer({ storage: storage })

app.post("/",upload.single("image")  ,  async (req, res) => {
  try {
    console.log(req.file)
    const {name,packsize,category,mrp,status } = req.body
    console.log(req.body)
    const CreateProduct = await Product.create({name,packsize,category,mrp,status})
    res.status(200).json({CreateProduct})

      
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});



app.post('/category', async (req,res)=>{
  try {
    console.log(req.body)
    const {category,description,status}=req.body
console.log(category,description,status)
  const data = await Category.create({category,description,status})
  res.status(201).json(data)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})



app.delete('/:id', async(req,res)=>{
  try {
      const {id} = req.params
      console.log(id)
     const deleteproduct = await Product.findByIdAndDelete(id)
     res.status(200).json(deleteproduct)
  } catch (error) {
      console.log(error)
      res.json({error:error})
  }
})



app.delete('/category/:id', async (req,res)=>{
  const {id} = req.params
  console.log(id)
  try {
  const data = await Category.findByIdAndDelete(id)
  res.status(201).json(data)
  } catch (error) {
  res.status(500).json({error:'error while fetching data'})    
  }
})








app.get('*',(req,res)=>{
    res.sendStatus(404)
})

app.listen(PORT,()=>{
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})

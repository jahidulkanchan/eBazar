const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db');
const productRoute = require('./routes/productRoute');
dotenv.config();


const app = express()
const port = process.env.PORT || 5000;

// MiddleWare 
app.use(express.json());
app.use(cors());


// MongoDB Connection ===================
connectDB()


// Handle Product Routes 
app.use('/products', productRoute);  


app.get('/', async(req,res)=>{
  res.send('This eBazar Server is Running')
})

app.listen(port, ()=>{
  console.log(`This server is running on port ${port}`)
}) 
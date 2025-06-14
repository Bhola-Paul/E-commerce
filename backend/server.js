import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloundinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

//app config
const app=express();
const port=process.env.PORT || 2000
connectDB();
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userRouter);

app.use('/api/product',productRouter);

app.use('/api/cart',cartRouter);

app.use('/api/order',orderRouter);

app.get('/',(req,res)=>{
    res.send('Api working!')
})

app.listen(port,()=> console.log(`Server started at port: ${port}`))
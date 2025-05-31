import { json } from "express";
import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";
import razorpay from 'razorpay'

//global variables
const currency='usd'
const deliverCharge=10;

//gateway initialize
const razorpayInstance=new razorpay({
    key_id:process.env.RAZORPAY_ID_KEY,
    key_secret:process.env.RAZORPAY_SECRET_KEY
})

// placing orders using cod
const placeOrder=async (req,res) => {
    try {
        const {userId,items,amount,address}=req.body;
        const orderData={
            userId,
            address,
            items,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
        }
        const newOrder=new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartData:{}});
        res.json({success:true,message:"Order Placed"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}



// placing orders using razorpay
const placeOrderRazorpay=async (req,res) => {
    try {
        const {userId,items,amount,address}=req.body;
        const orderData={
            userId,
            address,
            items,
            amount,
            paymentMethod:"Razorpay",
            payment:false,
            date:Date.now(),
        }
        const newOrder=new orderModel(orderData);
        await newOrder.save();
        const options={
            amount:amount*100,
            currency:currency.toUpperCase(),
            receipt:newOrder._id.toString(),
        }
        await razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                console.log(error);
                return res.json({success:false,message:error})
            }
            res.json({success:true,order})
        })
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//verify razorpay
const verifyRazorpay=async (req,res) => {
    try {
        const {userId,razorpay_order_id}=req.body;
        const orderInfo=await razorpayInstance.orders.fetch(razorpay_order_id);
        if (orderInfo.status==='paid') {
            await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true});
            await userModel.findByIdAndUpdate(userId,{cartData:{}});
            res.json({success:true,message:'Payment successful'});
        }
        else{
            res.json({success:false,message:'Payment failed'})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//All orders data for admin
const allOrders=async (req,res) => {
    try {
        const order=await orderModel.find({});
        res.json({success:true,order,message:"All orders fetched"})
    } catch (error) {
        console.log(error);
        res.json({success:true,message:error.message});
    }
}

//user order data for frontend
const userOrder=async (req,res) => {
    try {
        const {userId}=req.body;
        const orders=await orderModel.find({userId});
        res.json({success:true,orders,message:"Orders fetched"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//update order status from admin panel
const updateStatus=async (req,res) => {
    try {
        const {orderId,status}=req.body;
        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success:true,message:'Status updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {placeOrder,allOrders,userOrder,updateStatus,placeOrderRazorpay,verifyRazorpay};
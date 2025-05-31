import express from 'express'
import { allOrders, placeOrder, updateStatus, userOrder,placeOrderRazorpay,verifyRazorpay } from '../controllers/order.controller.js';
import adminAuth from './../middleware/adminAuth.js';
import authUser from './../middleware/auth.js';

const orderRouter=express.Router();

//admin features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

//user feature
orderRouter.post('/userorders',authUser,userOrder);

//verify payment
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)


export default orderRouter;


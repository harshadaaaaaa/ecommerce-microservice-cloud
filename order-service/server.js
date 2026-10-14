const express=require('express'); const app=express(); app.use(express.json()); let orders=[];
app.get('/health',(_req,res)=>res.json({status:'ok',service:'order-service'}));
app.post('/orders',(req,res)=>{const {name,email,address,items}=req.body;if(!name||!email||!address||!Array.isArray(items)||!items.length)return res.status(400).json({error:'Customer details and cart items are required'});const order={orderId:'SN-'+Date.now().toString().slice(-6),customer:{name,email,address},items,total:items.reduce((s,i)=>s+i.price*i.quantity,0),createdAt:new Date().toISOString()};orders.push(order);res.status(201).json(order);});
app.get('/orders',(_req,res)=>res.json(orders)); const PORT=process.env.PORT||4003;app.listen(PORT,()=>console.log(`Order service listening on ${PORT}`));

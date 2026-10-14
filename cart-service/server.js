const express=require('express'); const app=express(); app.use(express.json()); let cart=[];
app.get('/health',(_req,res)=>res.json({status:'ok',service:'cart-service'}));
app.get('/cart',(_req,res)=>res.json(cart));
app.post('/cart',(req,res)=>{const p=req.body.product;if(!p||!p.id)return res.status(400).json({error:'Product is required'});const old=cart.find(i=>i.id===p.id);if(old)old.quantity++;else cart.push({...p,quantity:1});res.status(201).json(cart);});
app.patch('/cart/:id',(req,res)=>{const item=cart.find(i=>i.id===req.params.id);if(!item)return res.status(404).json({error:'Cart item not found'});item.quantity+=Number(req.body.delta||0);if(item.quantity<=0)cart=cart.filter(i=>i.id!==req.params.id);res.json(cart);});
app.delete('/cart/:id',(req,res)=>{cart=cart.filter(i=>i.id!==req.params.id);res.json(cart);});
app.post('/cart/clear',(_req,res)=>{cart=[];res.json(cart);});
const PORT=process.env.PORT||4002;app.listen(PORT,()=>console.log(`Cart service listening on ${PORT}`));

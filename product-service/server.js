const express=require('express'); const products=require('./products.json'); const app=express(); app.use(express.json());
app.get('/health',(_req,res)=>res.json({status:'ok',service:'product-service'}));
app.get('/products',(_req,res)=>res.json(products));
app.get('/products/:id',(req,res)=>{const p=products.find(x=>x.id===req.params.id);p?res.json(p):res.status(404).json({error:'Product not found'});});
const PORT=process.env.PORT||4001;app.listen(PORT,()=>console.log(`Product service listening on ${PORT}`));

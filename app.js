const express = require('express');

const app = express() ;
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');


// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'It Works'
//     })
// });

app.use('/products',productRoutes);
app.use('/orders',ordersRoutes);

module.exports = app ;
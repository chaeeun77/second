const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const morgan = require('morgan');
// app.use((req, res) => {
//     res.json({
//         message: 'It works!'
//     })
// })

//미들웨어 설정
app.use(morgan('dev'))

//router
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

const PORT = 5000;
app.listen(PORT, console.log('server start'))
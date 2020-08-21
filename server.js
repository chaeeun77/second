const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
// app.use((req, res) => {
//     res.json({
//         message: 'It works!'
//     })
// })

//database 연결
const dbaddress = "mongodb+srv://second:codms13579@cluster0.loeyr.mongodb.net/<dbname>?retryWrites=true&w=majority"
const dboptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}

mongoose
    .connect(dbaddress, dboptions)
    .then(() => console.log("MongoDb connected"))
    .catch(err => console.log(err.message));

//미들웨어 설정
app.use(morgan('dev'))

//bodyparser에 대한 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//router
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

const PORT = 5000;
app.listen(PORT, console.log('server start'))
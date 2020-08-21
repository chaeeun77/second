const express = require('express');
const app = express();

app.use((req, res) => {
    res.json({
        message: 'It works!'
    })
})

const PORT = 5000;
app.listen(PORT, console.log('server start'))
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello my fisrt server')
})
app.listen(port, () => {
    console.log(`my server is running ${port}`)
})
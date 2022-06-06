const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.render('login.html')
})

app.listen(3000)
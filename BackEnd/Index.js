
const express = require('express')
const cors = require('cors')
const dbConnect = require('./db')
dbConnect()
const bodyParser = require('body-parser');



const port = '5500'

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/auth', require('./routes/authentication'))
app.use('/bill', require('./routes/billing'))



app.listen(port, () => {
    console.log("Server is running...")
})
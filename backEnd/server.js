const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')


const app = express()
app.use(cors(corsOptions))

const FRONEND = process.env.FRONEND

var corsOptions = {
  origin: FRONEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('/api/products', productRoute)



require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

app.use(express.json())
// app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  // throw new Error('fake Error')
  res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog! my name is saikhnaa')
  })


  app.use(errorMiddleware)


mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
      
    console.log('connected to MongoDb')
}).catch((error)=>{
    console.log(error)
})
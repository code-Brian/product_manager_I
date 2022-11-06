const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

require('./config/mongoose.config')

const routes = require('./routes/product.routes')
routes(app)

app.listen(PORT, ()=> {
    console.log(`Server is ticking on port: ${PORT}`)
})
const mongoose = require('mongoose')
const DB = "product_manager"

mongoose.connect(`mongodb://127.0.0.1/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log(`Successfully connected to ${DB} database!`)})
.catch(()=>{"dun goofed lel"})
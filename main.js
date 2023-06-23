const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv =  require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const route =require('./routes/route')
dotenv.config()
const app = express()
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


const dbConnect = async()=>{
    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    }catch(err){
        console.log('not connected',err)
        process.exit(1);
    }
}
dbConnect()




app.use('/api/v1/auth',route)


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

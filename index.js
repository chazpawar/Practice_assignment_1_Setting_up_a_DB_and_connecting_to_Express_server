const express = require('express');
const mongoose  = require('mongoose')
const { resolve } = require('path');
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const port = 3010;

const connectDB = async ()=>{
  try {
    const conn = await mongoose.connect (`${process.env.MOGO_URL}`)
    console.log(`connected to the mongoose ${port}`)

    
  } catch (error) {
    console.error(`mongoose faild to connect `,error )
    process.exit(1)
    
  }
}

connectDB();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

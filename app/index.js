const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000; // Port number can be customized
const cors = require('cors');

const userRouter = require('../routes/users.routes');
const productRouter = require('../routes/product.routes');
app.use(express.json()); // Middleware to parse JSON request bodies

// Define routes here
app.use(cors())
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB Atlas
 const uri = "mongodb+srv://tanajipatil9696:8wcaSvi7ho8dQlSJ@tanaji123.cszlwpu.mongodb.net/?retryWrites=true&w=majority";//process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas', err));


app.use('/users', userRouter);
app.use('/products', productRouter);

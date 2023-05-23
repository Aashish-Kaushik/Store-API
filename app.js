require('dotenv').config();
const express = require('express');
const app = express();
const notFoundMidddleware = require('./middleware/not-found');
const errorMidddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productdRouter = require('./routes/products');

// moddleware is used
app.use(express.json());
const PORT = process.env.PORT || 3004;
const URL = process.env.URL || "mongodb://localhost:27017/Store_API";

// routes
app.get('/', (req, res) => {
  res.send('<h1> Store API </h1><a href="/api/v1/products"> Products route </a>');
});
app.use('/api/v1/products', productdRouter);

// handleing errors
app.use(notFoundMidddleware);
app.use(errorMidddleware);

// server & DB setup
const start = async () => {
  try {
    connectDB(URL);
    app.listen(PORT, () => {
      console.log(`server is runing on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

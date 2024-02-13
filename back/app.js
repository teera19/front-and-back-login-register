require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const notFound = require("./middlewares/notFound");
const errorMiddlewares = require("./middlewares/error")
const authRoute = require("./routes/auth-route")
const productRoute = require('./routes/product-route')

const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.json());

//service
app.use('/auth', authRoute);
app.use('/products', productRoute)

//notFound
app.use(notFound);

//error
app.use(errorMiddlewares);

let port = process.env.PORT;
app.listen(port, () => console.log("Server run on port :", port));

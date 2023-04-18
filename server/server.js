const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors");
const employees = require("./routes/api/employees");

const app = express();

// Connect Database
connectDB();

// Calling CORS
app.use(cors({
    origin:true,
    credentials: true
}))

// Init Middleware
app.use(express.json({
    extended: false
}))

//app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/employees', employees)

require("dotenv").config( { path: "./config.env"})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
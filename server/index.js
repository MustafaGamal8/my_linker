const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/connectDb');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const passport = require('passport');
const UserModel = require('./models/userModel');
const cors = require('cors');

const app = express();
app.use(express.static('public'))
app.use(cors());

// Configure Passport to use sessions
app.use(require('express-session')({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));

// Initialize Passport
app.use(passport.initialize());
// app.use(passport.session());
require("./config/passport")



// Middleware
app.use(helmet());
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Auth routes
app.use("/auth", require('./routes/authRoutes'));

// User routes
app.use("/users", require('./routes/userRoutes'));

// Profile routes
app.use("/profile", require('./routes/profileRoutes'));

// image routes
app.use("/images", require('./routes/imageRoutes'));



// error handeller
app.use(require('./middlewares/errorMW'))

// Database connection
connectDB();

const PORT = process.env.PORT || 3000;

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})

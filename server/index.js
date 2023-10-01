const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/connectDb');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const passport = require('passport');
const UserModel = require('./models/userModel');


const app = express();
app.use(express.static('public'))

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

app.get('/users', async (req, res) => {
  const key = req.query.key

  if (key && key == "mustafa") {
    const users = await UserModel.find()
    return res.send(users)
  }
  res.send("Please Enter the Secret Key")
})

// Auth routes
app.use("/auth", require('./routes/authRoutes'));

// Profile routes
app.use("/profile", require('./routes/profileRoutes'));




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

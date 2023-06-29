const Joi = require('joi');
const express = require('express');
const app = express();
const cors = require("cors")
require("dotenv").config()
const connection = require("./db")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const useRoutes = require("./routes/user")
const logoutRoutes = require("./routes/logout")

// database connection
connection()

//middlewares
app.use(express.json());
app.use(cors())

//routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", useRoutes)
app.use("/logout", logoutRoutes);


// PORT
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))
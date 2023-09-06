const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to mongoDB')).catch(err => console.log(err.message));
app.use("/api/auth", authRoutes);
app.listen(process.env.PORT, () => console.log('listening on port 8080'));
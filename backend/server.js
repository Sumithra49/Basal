const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const interviewRoutes = require('./routes/interviewRoutes');
app.use('/api/interview-requests', interviewRoutes);

// Start server
app.listen(PORT, () =>{
   
 console.log(`🚀 Server running on port ${PORT}`);
})

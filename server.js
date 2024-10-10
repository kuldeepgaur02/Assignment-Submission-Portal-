const express = require('express')

const mongoose = require('mongoose');

const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
  

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
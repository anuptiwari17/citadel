const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());
app.use('/api/users', userRoutes);

async function startServer() {
  try {
    app.listen(3000, () => {
      console.log('Server is running as http://localhost:3000');
    });
  } catch (error) {
    console.error('Error starting server :', error);
  }
}

startServer();
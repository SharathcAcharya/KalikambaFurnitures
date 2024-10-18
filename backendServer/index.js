const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createServer } = require("http");
const app = express();
 
const server = createServer(app);

// const routes = require('./routes/routes');
// const chatRoutes = require('./routes/chatRoutes');

require('dotenv').config();
app.use(express.json());
app.use(cors());

// app.use('/api/', routes);
// app.use('/api/chat', chatRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
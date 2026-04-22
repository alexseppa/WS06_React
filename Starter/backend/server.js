const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//const pagesRouter = require('./routes/pages');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');


async function connectToDatabase() {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn('MONGODB_URI is missing. Create a .env file in backend/ before testing database features.');
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, { 
      dbName: 'blog' 
    });

    console.log('Successfully connected to MongoDB (Database: blog)');
    
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
  }
}


app.locals.publicDir = publicDir;
app.use(express.json());
app.use(express.static(publicDir));

//app.use('/', pagesRouter);
app.use('/api/posts', postsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Server error' });
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Mounted routers:');
    console.log('  / -> routes/pages.js');
    console.log('  /api/posts -> routes/posts.js');
  });
});

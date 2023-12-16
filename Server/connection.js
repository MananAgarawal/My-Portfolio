const mongoose = require('mongoose')

async function connection(url) {
    try {
      await mongoose.connect(url);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
module.exports = {
    connection
}


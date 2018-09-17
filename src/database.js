const mongoose = require('mongoose');
const URI = 'mongodb://admin1:admin1@ds147681.mlab.com:47681/proyecto2-database';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;

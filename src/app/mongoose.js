const mongoose = require('mongoose');
const config = require('./dbconfig');
mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { console.log('connected successfully');
}).catch((e) => {
  console.log('Error');
  console.log(e);
})

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
  mongoose
}
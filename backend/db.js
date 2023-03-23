const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&directConnection=true&tls=false"
mongoose.set('strictQuery', false);


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Successfully');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const posts = require('./routes/postRoute');
const users = require('./routes/userRoute');
const dbURI = process.env.REACT_APP_DB_URI || require('./secrets').dbURI;

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  return next();
});

mongoose
  .connect(
    dbURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.log('Connexion à MongoDB échouée.', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/posts', posts);
app.use('/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

app.listen(port, () => {
  console.log(`Utilisation du port ${port}`);
});

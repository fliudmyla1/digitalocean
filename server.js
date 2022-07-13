const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/superwarden', {})
  .then(() =>  console.log('mongodb is connected'))
  .catch((err) => console.error(err));
// mongoose.connect('mongodb://127.0.0.1:8087/superwarden', {}, (error) => {
//   if (error){
//     console.log("Please make sure Mongodb is installed and running");
//     console.log(error)
//   }
//   console.log("Connected to MongoDB")
// })
// file download
app.get('/download', function(req, res){
  const file = `${__dirname}/files/whitelist.xlsx`;
  res.download(file); // Set disposition and send it.
});
const apiRoute = require('./src/api/route')
app.use('/api/v1', apiRoute)
// app.use('/api/v1/test', () => {
//   let a = 90
// })





app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});



const port = process.env.PORT || 5001;
app.listen(port);

console.log(`listening on ${port}`);

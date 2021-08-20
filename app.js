const express = require('express')
const app = express()
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World2!')
})


app.listen(process.env.PORT || 5000,function () {
  console.log('server is running ' + process.env.PORT || 5000);
});

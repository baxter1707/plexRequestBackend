const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models')

// Set up the express app
const app = express();

app.set('port',(process.env.PORT || 8000))




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/test', (req, res) => res.status(200).send({
  message: 'This is a test',
}));



app.get('/json', (req,res) => {
  models.users.findAll({
    order: [
      ['id']
    ]
  }).then((user) =>{
    res.json({user:user})
  });
});

app.listen(app.get('port'), function(){
  console.log("we are live on port ", app.get('port'));
});

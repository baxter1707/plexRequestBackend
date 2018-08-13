const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const mustacheExpress = require('mustache-express')


app.use(bodyParser.urlencoded({extended:false}))
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')
app.set('port',(process.env.PORT || 8000))



app.get('/', (req,res) => {
  res.render('home')
  test
})

app.post('/SignUp',(req,res) =>{
  console.log(req.body.username)
  console.log(req.body.password)
  // models.users.create({
  //   username: req.body.username,
  //   password: req.body.password
  // }).then(() =>{
  //   res.json('success')
  // })
})

app.post('/testRequest',(req,res) =>{
  models.requests.create({
    title: req.body.title,
    year: req.body.year,
    status: req.body.status,
    userId: req.body.userId
  }).then(() =>{
    res.redirect('/')
  })
})



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

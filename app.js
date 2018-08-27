const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const mustacheExpress = require('mustache-express')
const SERVER_CONFIGS = require('./constants/server')
const configureServer = require('./server')


app.use(bodyParser.urlencoded({extended:false}))
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')

configureServer(app)



app.get('/', (req,res) => {
  res.render('home')
  test
})

app.post('/SignUp',(req,res) =>{
  models.users.create({
    username: req.body.username,
    password: req.body.password
  }).then(() =>{
    res.json('success')
  })
})

// app.post('/SignIn', (req,res) => {
//   models.users.findOne( {where: {email: req.body.email}} )
//   .then(teacher => {
//     const valid = bcrypt.compare(req.body.password, teacher.password)
//     if(valid) {
//       let myToken = jwt.sign(
//         {
//           uid: teacher.id,
//           username: teacher.user_name
//         },
//         secret
//       )
//       console.log(myToken)
//       res.status(200).json({
//         success: true,
//         uid: teacher.id,
//         username: teacher.username,
//         myToken
//       })
//     } else {
//       res
//         .status(400)
//         .json({ success: false, message: "Invalid!"})
//     }
//   }) .catch(err => {
//     res
//       .status(400)
//       .json ({success: false, message: "Invalid"})
//   })
// })




app.get('/json', (req,res) => {
  models.users.findAll({
    order: [
      ['id']
    ]
  }).then((user) =>{
    res.json({user:user})
  });
});

app.listen(SERVER_CONFIGS.PORT, error =>{
  if (error) throw error;
  console.log('Serving is running on port: ' + SERVER_CONFIGS.PORT)
})

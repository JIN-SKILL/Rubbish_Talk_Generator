// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const generateBullshit = require('./generate_bullshit.js')
const Handlebars = require('handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static source
app.use(express.static('public'))

// register handlebars
Handlebars.registerHelper('ifMatch', function (select, value, options) {
  if (select === value) return options.fn(this)
})

// use body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const select = req.body.profession
  const rubbishTalk = generateBullshit(select)
  res.render('index', { rubbishTalk, select })
})

// setting listen
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})

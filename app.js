// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static source
app.use(express.static('public'))

// use body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})


// setting listen
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})

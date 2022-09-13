const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    const liste =[ {title: 'bla', bla: 'bla'}, {title: 'bla', bla: 'bla'}]
  res.status(200).render('index.ejs',{liste})
})
app.get('/presentation', function (req, res) {
  res.status(200).render('presentation.ejs')
})
app.get('/contact', function (req, res) {
  res.status(200).render('contact.ejs')
})
app.get('/', function (req, res) {
  res.status(301).redirect('/home')
})
app.use((req, res) => {
  res.status(404).render('404.ejs')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.use(function (req, res, next) {
    console.log('Time:', Date().toString());
    next();
});  
app.get('/home', function (req, res) {
  res.status(200).sendFile('/html/index.html', {root:__dirname})
})
app.get('/presatation', function (req, res) {
  res.status(200).sendFile('/html/presentation.html', {root:__dirname})
})
app.get('/contact', function (req, res) {
  res.status(200).sendFile('/html/contact.html', {root:__dirname})
})
app.get('/', function (req, res) {
  res.status(301).redirect('/home')
})
app.use((req, res) => {
  res.status(404).sendFile('/html/404.html', {root:__dirname})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
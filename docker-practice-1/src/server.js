// nodemon src/server.js // use this command to run 


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is going to be first docker image')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
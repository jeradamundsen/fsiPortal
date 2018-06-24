const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send({ jerad: 'you are money' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT)

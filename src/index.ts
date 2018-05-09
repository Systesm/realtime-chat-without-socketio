import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// cors
app.use(cors())

app.get('/message', (req, res) => {
  app.on('notifications', data => {
    console.log(data)
    res.send('hello')
  })
})

app.post('/message', (req, res) => {
  // console.log(req.body)
  app.emit('notifications', req.body)
})

app.listen(3002, function() {
  console.log('CORS-enabled web server listening on port 3002')
})

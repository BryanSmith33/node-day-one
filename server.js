// require our dependencies 👇
const express = require('express')
const bodyParser = require('body-parser')
// include our controller. Our controller is where all of our logic lives
const kc = require('./controllers/kittens_controller')

// invoke express and assign it to app. we do this because it is easier than typing express().get(...) or something to that effect
const app = express()
// use bodyParser.json() in every request
app.use(bodyParser.json())

// all of our requests
app.get('/api/kittens', kc.getAll)
// notice we include :id. this is a param. it can be called anything as long as it has a :before it
app.get('/api/kitten/:id', kc.getByID)
app.post('/api/createKitten', kc.create)
app.put('/api/updateKitten/:id', kc.update)
app.delete('/api/deleteKitten/:id', kc.delete)

//port to listen on. capitalized generally means DON'T TOUCH
const PORT = 3333
// this starts up the server
app.listen(PORT, () => console.log(`The magic happening on ${PORT} 💋`))
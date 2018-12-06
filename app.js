const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const cors = require('cors')
const bodyParser = require('body-parser')
const movies = require('./routes/movies_routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/movies', movies)

app.get('/', (req, res) => {
    res.send('hey')
})

app.listen(port, console.log(`yo ${port}`))
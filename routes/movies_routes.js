const express = require('express')
const router = express.Router()
const queries = require('../queries/movies_queries')

router.get('/', (req, res, next) => {
    queries.getAll().then(movies => res.status(200).send(movies))
})

router.get('/:id', (req, res, next) => {
    queries.getMovieById(req.params.id).then(movie => res.status(200).send({ movie }))
})

router.post('/', (req, res, next) => {
    queries.createMovie(req.body).then(movies => res.status(200).send(movies))
})

router.delete('/:id', (req, res, next) => {
    queries.deleteMovie(req.params.id).then(res.sendStatus(204))
})

router.put('/:id', (req, res, next) => {
    queries.updateMovie(req.params.id, req.body).then(updatedMovie => res.json(updatedMovie[0]))
})

module.exports = router
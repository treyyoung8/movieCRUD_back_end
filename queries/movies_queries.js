const db = require('../database-connection')

module.exports = {
    getAll() {
        return db('movies')
    },
    getMovieById(id) {
        return db('movies').where('id', id).then(movie => movie[0])
    },
    createMovie(newMovie) {
        return db('movies').insert(newMovie).returning('*')
    },
    deleteMovie(id) {
        return db('movies').where('id', id).delete()
    },
    updateMovie(id, movie) {
        return db('movies').where('id', id).update(movie).returning('*')
    }
}
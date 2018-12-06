exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {
          title: 'The Fast and The Furious',
          director: 'Rob Cohen',
          year: 2001,
          rating: 5,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: 'Senna',
          director: 'Asif Kapadia',
          year: 2010,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/1/18/Senna.jpg'
        },
        {
          title: 'Rush',
          director: 'Ron Howard',
          year: 2013,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Rush_UK_poster.jpeg'
        },
        {
          title: 'National Treasure',
          director: 'Jon Turteltaub',
          year: 2004,
          rating: 3,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: 'Zoolander',
          director: 'Ben Stiller',
          year: 2001,
          rating: 2,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: 'Any Given Sunday',
          director: 'Oliver Stone',
          year: 1999,
          rating: 4,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/8/80/Any_Given_Sunday.jpg'
        },
        {
          title: 'Kung Pow! Enter the Fist',
          director: 'Steve Oedekerk',
          year: 2002,
          rating: 1,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/5/54/Kungpow.jpg'
        }
      ]);
    });
};

export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});
export const setGenres = (listOfGenres) => ({
  type: 'setGenres',
  listOfGenres,
});

export const likeMovie = (id) => ({
  type: 'likeMovie',
  id,
});

export const dislikeMovie = (id) => ({
  type: 'dislikeMovie',
  id,
});

export const setMoviesByFilter = (list) => ({
  type: 'setMoviesByFilter',
  list,
});
import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  mostPopular: [],
};

const initialStateOfGenres = {
  genresList: []
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      mostPopular: action.list,
    }
    case 'setMoviesByFilter':
      return {
        ...state,
        mostPopular: action.list
      };
    default: return state;
  }
};

const genres = (state = initialStateOfGenres, action) => {
  switch(action.type){
    case 'setGenres': return {
      ...state,
      genresList: action.listOfGenres,
    };
    default: return state;
  }
};

const initialStateOfLikedCards = {
  lovedMovies: [],
};

const likedCardsReducer = (state = initialStateOfLikedCards, action) => {
  switch(action.type){
    case 'likeMovie': return {
      ...state,
      lovedMovies: [...state.lovedMovies, action.id],
    };

    case 'dislikeMovie': return {
      ...state,
      lovedMovies: state.lovedMovies.filter(id => id !== action.id),
    };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  componentState,
  cards,
  genres,
  likedCardsReducer,
});

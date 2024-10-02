const initialState = {
    nowPlaying: [],
    topRated: [],
    popular: [],
    upcoming: [],
    movieDetails: {},
    cast: [],
    loading: false,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_NOW_PLAYING_SUCCESS':
            return { ...state, nowPlaying: action.payload, loading: false };
        case 'FETCH_TOP_RATED_SUCCESS':
            return { ...state, topRated: action.payload, loading: false };
        case 'FETCH_POPULAR_SUCCESS':
            return { ...state, popular: action.payload, loading: false };
        case 'FETCH_UPCOMING_SUCCESS':
            return { ...state, upcoming: action.payload, loading: false };
        case 'FETCH_MOVIES_SUCCESS':
            return { ...state, movies: action.payload, loading: false };
        case 'FETCH_MOVIE_DETAILS_SUCCESS':
            return { ...state, movieDetails: action.payload, loading: false };
        case 'FETCH_MOVIE_CAST_SUCCESS':
            return { ...state, cast: action.payload, loading: false };
        default:
            return state;
    }
};

export default moviesReducer;

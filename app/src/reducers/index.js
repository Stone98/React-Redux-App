import { FETCHING_QUOTE_LOADING, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE } from '../actions';

const initialState = {
    quote: null,
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_LOADING:
            return ({
                ...state,
                isFetching: true,
            });
        case FETCHING_QUOTE_SUCCESS:
            return ({
                ...state,
                quote: action.payload,
                isFetching: false,
                error: ''
            });
        case FETCHING_QUOTE_FAILURE:
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            });
        default:
            return state;
    }
}
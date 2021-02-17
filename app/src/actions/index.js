import axios from 'axios';
export const FETCHING_QUOTE_LOADING = 'FETCHING_QUOTE_LOADING';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const getQuote = () => {
    return dispatch => {
        dispatch(fetchQuoteLoading());

        axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then((res) => {
                dispatch(fetchQuoteSuccess(res.data.toString()))
            })
            .catch((err) => {
                console.log(err);
                dispatch(fetchQuoteFailure(err))
            })
    }
}

export const fetchQuoteLoading = () => {
    return ({
        type: FETCHING_QUOTE_LOADING
    });
};

export const fetchQuoteSuccess = (quote) => {
    return ({
        type: FETCHING_QUOTE_SUCCESS,
        payload: quote
    });
};

export const fetchQuoteFailure = (error) => {
    return ({
        type: FETCHING_QUOTE_FAILURE,
        payload: error
    });
};
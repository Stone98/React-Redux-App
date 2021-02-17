import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

function Quotes(props) {
    const { quote, isFetching, error, getQuote } = props;

    useEffect(() => {
        getQuote();
    }, [getQuote]);

    const handleClick = () => {
        getQuote();
    }

    if (error) {
        return <h2>An error has occured: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching quote!</h2>;
    }

    return (
        <>
            <h2>Ron says: "{quote}"</h2>
            <button onClick={handleClick}>Get new quote</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getQuote })(Quotes);

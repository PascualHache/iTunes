const initialState = {
    results: [],
    loading: false,
    error: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_SONGS':
            return {
                results: [],
                loading: true,
                error: false,
            };
        case 'REQUESTED_SONGS_SUCCEEDED':
            return {
                results: action.response,
                loading: false,
                error: false,
            };
        case 'REQUESTED_SONGS_FAILED':
            return {
                results: [],
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
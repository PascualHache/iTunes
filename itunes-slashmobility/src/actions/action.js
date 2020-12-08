export const requestSongs = () => {
    return { type: 'REQUESTED_SONGS' }
};

export const requestSongsSuccess = (data) => {
    return { type: 'REQUESTED_SONGS_SUCCEEDED', response: data.results }
};

export const requestSongsError = () => {
    return { type: 'REQUESTED_SONGS_FAILED' }
};

export const fetchSongs = (name) => {
    return { type: 'FETCHED_SONGS', name}
};
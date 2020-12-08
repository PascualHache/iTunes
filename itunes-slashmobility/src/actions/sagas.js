import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { requestSongs, requestSongsSuccess, requestSongsError } from './action';

export default function* watchFetchSongs() {
    yield takeEvery('FETCHED_SONGS', fetchSongsAsync);
}

export function* fetchSongsAsync({name}) {
    try {
        yield put(requestSongs());
        const data = yield call(() => axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?&entity=song&term=${name}`
        ).then(response => response.data)
            .catch(err => {
                throw err;
            }));
        yield put(requestSongsSuccess(data));
    } catch (error) {
        yield put(requestSongsError());
    }
}
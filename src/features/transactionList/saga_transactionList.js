import {getFlip} from './url_transactionList';
import {takeLatest, put} from 'redux-saga/effects';

function* getData() {
	try {
		const resData = yield getFlip();
		if (resData && resData.data) {
			yield put({type: 'flip_done', payload: resData.data});
		} else {
			yield put({type: 'flip_failed'});
		}
	} catch (err) {
		console.log(err);
		yield put({type: 'flip_failed'});
	}
}

function* saga_transactionList() {
	yield takeLatest('flip', getData);
}

export default saga_transactionList;

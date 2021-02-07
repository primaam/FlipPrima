import {all} from 'redux-saga/effects';
import saga_transactionList from '../../features/transactionList/saga_transactionList';

export default function* rootSaga() {
	yield all([saga_transactionList()]);
}

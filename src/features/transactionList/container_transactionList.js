import {connect} from 'react-redux';
import {TransactionList} from './comp_transactionList';

const mapStateToProps = (state) => {
	return {
		isLoading: state.dataFlip.isLoading,
		data: state.dataFlip.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => dispatch({type: 'flip'}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);

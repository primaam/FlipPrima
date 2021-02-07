import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
	TextInput,
	ActivityIndicator,
} from 'react-native';
import {Icon, Status} from '../../shared/components';
import {styles} from './style_transactionList';
import {Rupiah, convertDateToString, checkCapital} from '../../shared/function';
import {AppStyle, wp, hp} from '../../shared/style';
const {color} = AppStyle;

export class TransactionList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			filter : 'URUTKAN'
		};
	}

	componentDidMount() {
		this.props.getData();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			data: nextProps.data,
		});
	}

	searchFilterFunction = (text) => {
		const newData = this.props.data.filter((item) => {
			const itemData = `${item.beneficiary_bank.toUpperCase()}   
   			 ${item.beneficiary_name.toUpperCase()}`;

			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		this.setState({data: newData});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.search}>
					<Icon name="search" />
					<TextInput
						placeholder="Cari nama ,bank, atau nominal"
						onChangeText={(text) => this.searchFilterFunction(text)}
						style={styles.formInput}
					/>
					<View style={styles.flex}>
						<Text style={styles.filterText}>{this.state.filter}</Text>
						<Icon name="downArrow" />
					</View>
				</View>
				{this.props.isLoading ? (
					<ActivityIndicator
						size="large"
						color={color.red}
						style={styles.loading}
					/>
				) : (
					<ScrollView style={styles.scroll}>
						{this.state.data.map((item, index) => (
							<View
								key={index}
								style={
									item.status === 'SUCCESS'
										? styles.card
										: {...styles.card, borderLeftColor: color.red}
								}>
								<View style={styles.flexCard}>
									<View>
										<View style={styles.flex}>
											<Text style={styles.txtBank}>
												{checkCapital(item.beneficiary_bank)}
											</Text>
											<Icon name="arrowIcon" />
											<Text style={styles.txtBank}>
												{' '}
												{checkCapital(item.sender_bank)}
											</Text>
										</View>
										<Text style={styles.txtName}>
											{item.beneficiary_name.toUpperCase()}
										</Text>
										<View style={styles.flex}>
											<Text style={styles.txtAmount}>
												Rp{Rupiah(item.amount)}
											</Text>
											<Icon name="dot" />
											<Text style={styles.txtAmount}>
												{convertDateToString(item.created_at)}
											</Text>
										</View>
									</View>
									<Status type={item.status} />
								</View>
							</View>
						))}
					</ScrollView>
				)}
			</View>
		);
	}
}

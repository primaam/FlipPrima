import React, {useState, useEffect, useMemo, useRef, useCallback} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
	TextInput,
	ActivityIndicator,
} from 'react-native';
import {Icon, Status, PopUp} from '../../shared/components';
import {styles} from './style_transactionList';
import {Rupiah, convertDateToString, checkCapital} from '../../shared/function';
import {AppStyle, wp, hp} from '../../shared/style';
const {color} = AppStyle;

export function TransactionList(props){
	const [data, setData] = useState(props.data)
	const [filter, setFilter] = useState('URUTAN')
	const [modalVisible, setModalVisible] = useState(false)

	useEffect(() => {
		props.getData()
		console.log('sebelum set')
		setData(props.data)
		console.log('sesudah set')
	},[data])
	
	useCallback(()=> {
		setData(props.data)
	},[data])
	const searchFilterFunction = (text) => {
		const newData = props.data.filter((item) => {
			const itemData = `${item.beneficiary_bank.toUpperCase()}   
   			 ${item.beneficiary_name.toUpperCase()} ${item.amount} ${item.sender_bank.toUpperCase()}`;

			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		setData(newData);
	};
 
	return (
		<View style={styles.container}>
			<PopUp visible={modalVisible} close={()=> setModalVisible(false)}/>
			<View style={styles.search}>
				<Icon name="search" /> 
				<TextInput
					placeholder="Cari nama ,bank, atau nominal"
					onChangeText={(text) => searchFilterFunction(text)}
					style={styles.formInput}
				/>
				<TouchableOpacity style={styles.flex} onPress={()=> setModalVisible(true)}>
					<Text style={styles.filterText}>{filter}</Text>
					<Icon name="downArrow" />
				</TouchableOpacity>
			</View>
			{props.isLoading ? (
				<ActivityIndicator
					size="large"
					color={color.red}
					style={styles.loading}
				/>
			) : (
				<ScrollView style={styles.scroll}>
					{data.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={()=> props.navigation.navigate('Detail Page', item)}
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
						</TouchableOpacity>
					))}
				</ScrollView>
			)}
		</View>
	);
}

import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Icon, Status} from '../../../shared/components';
import {Rupiah, convertDateToString, checkCapital} from '../../../shared/function';
import {styles} from './style_detailPage'

function DetailPage(props){
    const data = props.route.params
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.txtId}>ID TRANSAKSI: #{data.id}</Text>
            </View>
            <View style={{...styles.flex, justifyContent: 'space-between', ...styles.card}}>
                <Text style={styles.txtId}>DETAIL TRANSAKSI</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Transaction List')}>
                    <Text style={{...styles.txtId,color: 'red'}}>Tutup</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.flex}>
                    <Text style={styles.txtBank}>{data.beneficiary_bank}</Text>
                    <Icon name="arrowIcon" />
                    <Text style={styles.txtBank}>{data.sender_bank}</Text>
                </View>
                <View style={{...styles.flex,justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flex: 1}}>    
                        <Text style={{...styles.txtName, fontWeight: 'bold'}}>{data.beneficiary_name}</Text>
                        <Text style={styles.txtAmount}>{data.account_number}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{...styles.txtName, fontWeight: 'bold'}}>NOMINAL</Text>
                        <Text style={styles.txtAmount}>Rp{Rupiah(data.amount)}</Text>
                    </View>
                </View>
                <View style={{...styles.flex,justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{flex: 1}}>
                        <Text style={{...styles.txtName, fontWeight: 'bold'}}>BERITA TRANSFER</Text>
                        <Text style={styles.txtAmount}>{data.remark}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{...styles.txtName, fontWeight: 'bold'}}>KODE UNIK</Text>
                        <Text style={styles.txtAmount}>{data.unique_code}</Text>
                    </View>
                </View>
                <Text style={{...styles.txtName, fontWeight: 'bold'}}>WAKTU DIBUAT</Text>
                <Text style={styles.txtAmount}>{convertDateToString(data.created_at)}</Text>
            </View>
        </View>
    )
}

export default DetailPage
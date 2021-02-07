import React, { useState } from 'react'
import {View, Modal, StyleSheet, TouchableOpacity, Text} from 'react-native'
import Icon from '../icon'
import {AppStyle, wp, fp, hp} from '../../style';
const {color, font, fontSize} = AppStyle;

function PopUp({visible, close}){
    const [active, setActive] = useState(0)
    const list = [
        {
            title: 'URUTAN'
        },
        {
            title: 'Nama A-Z'
        },
        {
            title: 'Nama Z-A'
        },
        {
            title: 'Tanggal Terbaru'
        },
        {
            title: 'Tanggal Terlama'
        },
    ]

    const handleOnPress= (index) => {
        close(),
        setActive(index)
    }

    return(
        <Modal
            animationType='fade'
            transparent={true}
            modalBackground='blur'
            visible={visible}>
                <View style={styles.modalCore}>
                    <View style={styles.modal}>
                        {list.map((item, index) =>(
                        <TouchableOpacity style={styles.picker} onPress={() => handleOnPress(index)} key={index}>
                            <Icon name={ active=== index ? 'radioActive' : 'radio'} />
                            <Text style={styles.txtPicker}>{item.title}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>   
                </View>
        </Modal>
    )
}

export default PopUp

const styles = StyleSheet.create({
    modal: {
        width: '90%',
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'
    },
    modalCore: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(34,34,34,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    picker: {
        flexDirection: 'row',
        marginVertical: 18
    },
    txtPicker: {
        fontSize: fontSize.font22,
		fontFamily: font.regular,
    }
})

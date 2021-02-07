import React,{useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../../features/transactionList/detailPage/comp_detailPage';
import  TransactionList  from '../../features/transactionList/container_transactionList';
import {useSelector, useDispatch} from 'react-redux'

const Stack = createStackNavigator();

export default function AppStack() {
  // const data = useSelector(state => state.dataFlip.data)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   // (data == null){
  //     dispatch({type: `flip`})
  //     console.log('apakek')
  //   // }
  // }, [])
  // // console.log(data)
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Transaction List" component={TransactionList} options={{headerShown: false}}/>
            <Stack.Screen name="Detail Page" component={DetailPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
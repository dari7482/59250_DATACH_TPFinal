
import React from 'react'
import Header from '../components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../screens/Order';


const Stack = createNativeStackNavigator();

const OrderStack = () => {

    return (

        <Stack.Navigator
            //initialRouteName='Home'
            screenOptions={(
                () => {

                    return {
                        header: () => {

                            return <Header title="Ordenes" />
                        }
                    }
                })}
        >
            <Stack.Screen name="Order" component={Order} />



        </Stack.Navigator>


    )
}

export default OrderStack
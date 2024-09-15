
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../global/color';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    const idToken = useSelector(state => state.auth.idToken)
    console.log('token', idToken)


    return (
        <NavigationContainer>

            {idToken ? <TabNavigator /> :
                <AuthStack />}

        </NavigationContainer>


    )

}

export default MainNavigator

const styles = StyleSheet.create({

    tabBar: {

        backgroundColor: colors.green1,
        padding: 5,
        height: 80

    }




})
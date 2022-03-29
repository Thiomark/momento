import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountsScreen from '../screens/home/AccountsScreen';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#212121',
                },
            })} 
        >
            <Stack.Screen 
                options={() => ({
                    headerTitle: 'Removed'
                })}
                name='RemovedScreen' 
                component={AccountsScreen}
            />
        </Stack.Navigator>
    )

}

export default HomeStack
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/live/HomeScreen';
import FunctionScreen from '../screens/live/FunctionScreen';
import colors from '../utils/colors';
import SettingsScreen from '../screens/live/SettingsScreen';
// import EditSettingsScreen from '../screens/profile/EditProfileSettingsScreen'
import tw from 'tailwind-react-native-classnames';
import { View } from 'react-native';
import { SocketContext } from '../providers/SocketProvider';
import IconButton from '../components/IconButton';

const LiveStack = () => {

    const Stack = createNativeStackNavigator();
    const { openBrowser, isBrowerOpen, closeBrowser } = useContext(SocketContext);

    return (
        <Stack.Navigator
            initialRouteName='Automate'
            screenOptions={() => ({
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#212121',
                },
            })} 
        >
            <Stack.Screen 
                name='Automate' 
                component={HomeScreen}
                options={({navigation}) => ({
                    headerRight: () => {
                        return (
                            <View style={tw`flex flex-row`}>
                                {isBrowerOpen ? (
                                    <IconButton 
                                        name='log-out-outline' 
                                        size={35}
                                        color='#A1300D'
                                        event={closeBrowser}
                                    />
                                    ) : (
                                    <IconButton 
                                        name='logo-instagram' 
                                        size={35}
                                        color='purple'
                                        event={openBrowser}
                                    />
                                )}
                                <IconButton
                                    customStyle='pl-4'
                                    name='timer-outline' 
                                    size={35}
                                    color={colors.blue}
                                    event={() => {
                                        navigation.navigate('aa')
                                    }}
                                />
                            </View>
                        )
                    }
                })}
            />
            <Stack.Screen 
                options={({route, navigation}) => ({
                    headerTitle: `${route.params.func.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}`,
                    headerRight: () => {
                        return (
                            <View style={tw`flex flex-row items-center`}>
                                <IconButton 
                                    event={() => {
                                        navigation.navigate('SettingsScreen', {
                                            param: route.params.func
                                        });
                                    }}
                                    name='settings-outline'
                                />
                            </View>
                        )
                    }
                })}
                name='FunctionScreen' 
                component={FunctionScreen}
            />
            <Stack.Screen 
                options={() => ({headerTitle: `Settings`})}
                name='SettingsScreen' 
                component={SettingsScreen}
            />
        </Stack.Navigator>
    )
}

export default LiveStack

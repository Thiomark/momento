import HomeStack from './HomeStack';
// import SessionStack from "./SessionStack";
// import ProfileStack from './ProfileStack';
import LiveStack from './LiveStack';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='LiveStack'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'HomeStack':
                            iconName = focused ? 'planet' : 'planet-outline';
                            break;
                        case 'Report':
                            iconName = focused ? 'list' : 'list-outline';
                            break;
                        case 'LiveStack':
                            iconName = focused ? 'pulse' : 'pulse-outline';
                            break;
                        default:
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                    }
                    return <Icon name={iconName} type='ionicon' size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#0086F1',
                tabBarInactiveTintColor: 'gray',
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    borderTopColor:'#292929', 
                    borderTopWidth: 1, 
                    height: 60,
                },
                headerStyle: {
                    backgroundColor: '#212121',
                },
                tabBarLabel:() => {return null},
            })}
        >
            <Tab.Screen name="HomeStack" options={{ headerShown: false}} component={HomeStack} />
            <Tab.Screen name="LiveStack" options={{ headerShown: false}} component={LiveStack} />
            <Tab.Screen name="Report" options={{ headerShown: false}} component={LiveStack} />
            <Tab.Screen name="ProfileStack" options={{ headerShown: false}} component={LiveStack} />
        </Tab.Navigator>
    )
}

export default AppTabs
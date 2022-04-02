import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/home/HomeScreen';

const Tab = createMaterialTopTabNavigator();

const HomeStack = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: 'powderblue' },
            }} 
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
    );
    
    // return (
    //     <Stack.Navigator
    //         screenOptions={() => ({
    //             headerTintColor: 'white',
    //             headerStyle: {
    //                 backgroundColor: '#212121',
    //             },
    //         })} 
    //     >
    //         <Stack.Screen 
    //             options={() => ({
    //                 headerTitle: 'Removed'
    //             })}
    //             name='RemovedScreen' 
    //             component={HomeScreen}
    //         />
    //     </Stack.Navigator>
    // )
}

export default HomeStack
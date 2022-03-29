import AuthStack from '../stacks/AuthStatck';
import AppTabs from './Providers'
import Container from '../shared/Container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AuthContext, AuthProvider } from '../providers/AuthProvider';
import { useState, useContext, useEffect } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get("screen");

const Routes = () => {
    const { user, qrCodeUrl, setUserFromLocalStorage } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) setUserFromLocalStorage();
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container>
                <View style={[tw`flex items-center justify-center`, {width, height}]}>
                    <ActivityIndicator size="large" color="gray" />
                </View>
            </Container>
        );
    }

    return (
        <NavigationContainer theme={DarkTheme}>
            <SafeAreaProvider>
                {user && qrCodeUrl ? ( <AppTabs /> ) : ( <AuthStack /> )}
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default Routes;




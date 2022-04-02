import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../shared/Container'
import tw from 'tailwind-react-native-classnames'
import { useQuery } from 'react-query'
import settingsKeys from '../../project/settingsKeys'
import { useRoute } from '@react-navigation/native'

const SettingsScreen = () => {
    const route = useRoute();
    console.log(settingsKeys[route.params.param])
    // const fetchSettings = async () => {
    //     const {date, settings} = await fetchScreenSettings(route.params.param);
    //     setTitle(settingsKeys[route.params.param].last)
    //     // setSettings(settings);
    //     // setDate(date);
    //     // setIsLoading(false);
    // }


    // const {data} = useQuery('settings', fetchSettings);

    return (
        <Container>
            <Text style={tw`text-white`}>SettingsScreen</Text>
        </Container>
    )
}

export default SettingsScreen
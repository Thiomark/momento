import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import tw from 'tailwind-react-native-classnames';
import Container from '../../shared/Container';
import { SocketContext } from '../../providers/SocketProvider';
import settingsKeys from '../../project/settingsKeys'

const Button = ({button, navigate, func}) => {
    return (
        <View style={[tw`flex flex-row w-full pb-1`]}>
            <TouchableOpacity onPress={() => {
                navigate('FunctionScreen', {func});
            }} style={[{backgroundColor: '#313238'}, tw`rounded-md flex-grow flex items-center justify-center`]}>
                <Text style={tw`p-4 font-bold text-gray-50`}>{button.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Text>
            </TouchableOpacity>
        </View>
    )
}

const HomeScreen = ({navigation}) => {
    const {isBrowerOpen} = useContext(SocketContext);
    const functions = Object.keys(settingsKeys);

    return (
        <Container>
            <View style={[{backgroundColor: '#365B74'}, tw`p-6 w-full flex items-center justify-center`]}>
                <Text style={[{fontSize: 16}, tw`text-gray-50 font-bold`]}>You Are {""}
                    {isBrowerOpen ?
                        (
                            <Text style={tw`text-green-500 uppercase`}>online</Text>
                            ): (
                                <Text style={tw`text-red-500 uppercase`}>offline</Text>
                        )
                    }
                </Text>
                {isBrowerOpen ? (
                    <Text style={[tw`text-gray-200 pt-2 text-center`]}>Click on any function below to start automation</Text>
                    ) : (
                        <Text style={tw`text-gray-200 pt-2 text-center`}>Click on the instagram button {"\n"} to login into Instagram</Text>
                )}
            </View>
            <Text style={tw`text-gray-200 font-bold py-2 text-lg px-1 pt-4`}>Functions</Text>
            <FlatList
                style={tw`w-full px-1`}
                data={functions}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <Button navigate={navigation.navigate} func={item} button={item}/>
                )}
            />
        </Container>
    )
}

export default HomeScreen;
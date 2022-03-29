import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View, Pressable, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Container from '../../shared/Container';
import { SocketContext } from '../../providers/SocketProvider';

const createTwoButtonAlert = (index, deleteMessage) => {
    Alert.alert( "Delete Message", null,[
        {text: "Cancel", style: "cancel"},
        {text: "Delete", onPress: () => deleteMessage(index)}
    ]);
}

const checkColor = (value) => {
    if(value === 1) return 'border-yellow-500';
    else if(value === 2) return 'border-green-500';
    else if(value === 3) return 'border-blue-500';
    else if(value === 'red') return 'border-red-500';
}

const FunctionScreen = () => {
    const { action, isBrowerOpen, messages, deleteMessage, removedMessages } = useContext(SocketContext);
    const route = useRoute(); 

    return (
        <Container y={1}>
            <FlatList
                style={{flex: 1}}
                data={messages}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => (
                    <Pressable onLongPress={() => {
                        createTwoButtonAlert(index, deleteMessage)
                    }} style={[{backgroundColor: '#212121'}, tw`mb-1 ${item.color && 'border-l-4'}
                        ${checkColor(item?.color)} p-2 rounded`]}
                    >
                        <Text style={tw`font-bold ${!item.color && 'pl-1'} text-gray-50`}>{item.msg}</Text>
                        <View style={tw`flex items-end`}>
                            <Text style={tw`text-gray-300`}>{moment(item.time).format('LTS')}</Text>
                        </View>
                    </Pressable>
                )}
            />
            <View style={tw`flex flex-row items-center justify-between`}>
                <TouchableOpacity 
                    disabled={!isBrowerOpen}
                    onPress={() => {
                        action(route.params.func);
                    }}
                    style={[{width: messages.length > 0 ? '68%' : '100%'}, tw`rounded-md ${isBrowerOpen ? 'bg-green-700': 'bg-red-500'} flex items-center justify-center`]}
                >
                    <Text style={tw`p-4 font-bold text-gray-50`}>{
                        isBrowerOpen ? 'Start' : 'Your Are Offline'
                    }</Text>
                </TouchableOpacity>
                {
                    messages.length > 0 && (
                        <TouchableOpacity
                            onPress={removedMessages}
                            style={[{width: '30%'}, tw`rounded-md bg-gray-600 flex items-center justify-center`]}
                        >
                            <Text style={tw`p-4 font-bold text-gray-50`}>Clear All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </Container>
    )
}

export default FunctionScreen;
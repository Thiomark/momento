import { StyleSheet, Text, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import IconButton from "./IconButton"

const AccountComponent = ({}) => {
    return (
        <View>
            <View style={tw`flex flex-row items-center justify-evenly`}>
                <IconButton name='star-outline'/>
                <View style={styles.details}>
                    <Text style={[tw`font-bold text-lg text-gray-50`,styles.titleInfo]}>123</Text>
                    <Text style={[tw`font-bold text-sm text-gray-400 -mt-2`]}>Followers</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[tw`font-bold text-lg text-gray-50`,styles.titleInfo]}>123</Text>
                    <Text style={[tw`font-bold text-sm text-gray-400 -mt-2`]}>Following</Text>
                </View>
                <IconButton name='trash-outline'/>
            </View>
            <View>
                
            </View>
        </View>
    )
}

export default AccountComponent

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1A1B21',
        borderRadius: 5,
        padding: 8
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    details: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    border: {
        height: 2,
        width: '80%',
        backgroundColor: 'gray', 
        borderRadius: 5
    }
})
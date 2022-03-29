import { View, Text, StyleSheet, Button  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Container from '../../shared/Container';
import React, { useState, useEffect, useContext } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AuthContext } from '../../providers/AuthProvider';

const QRCodeScanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const {setUrl} = useContext(AuthContext);
  
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setUrl(data);
        navigation.goBack();
    };
  
    if (hasPermission === null) return <Text>Requesting for camera permission</Text>;
    if (hasPermission === false) return <Text>No access to camera</Text>;
  
    return (
        <Container>
            <View style={tw`flex-1 bg-green-500`}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        </Container>
    );
}

export default QRCodeScanner
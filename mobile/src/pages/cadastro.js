import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import api from '../service/api';

export default function login({ navigation }){
    const [ user, setUser ] = useState('');
    const [currentRegion, setCurrentRegion] = useState(null);
    const [phone, setPhone] = useState(null);


    useEffect(() => {
        async function loadInicialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInicialPosition();
    }, []);

    async function handleLogin(){
        const response = await api.post('/devs', { username: user, latitude: currentRegion.latitude, 
            longitude: currentRegion.longitude, phoneNumber: phone});

        const { _id } = response.data;

        navigation.navigate('Main', { user : _id });
    }
    
    return (

        <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Número do celular"
        style={styles.input}
        onChangeText={ setPhone }
        maxLength={9}
        >
        </TextInput>

    )
}

const styles = StyleSheet.create({

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderEndWidth: 1,
        borderColor: '#c1b0ad',
        borderWidth: 0.5,
        borderRadius: 15,
        marginTop: 10,
        paddingHorizontal: 15
    }
});
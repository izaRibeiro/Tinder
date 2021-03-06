import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import Cadastro from './cadastro.js';

import logo from '../assets/logo.png';
import api from '../service/api';

export default function login({ navigation }){
    const [ user, setUser ] = useState('');
    const [currentRegion, setCurrentRegion] = useState(null);
    const [cadastro, setCadastro] = useState(null);
    const [phoneNumber, setPhone] = useState(null);
    const [inCadastro, setInCadastro] = useState(false);

    useEffect(() => {
        async function loadInicialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                //  const distance = getDistance(
                //     { latitude: 51.5103, longitude: 7.49347 },
                //      { latitude: 51.5103, longitude: 7.49347 }
                //  );

               // const distance = locationA.distanceTo(locationB);


                position1 = { latitude: -21.747983, longitude: -43.357617 }    
                position2 = {latitude: -21.739891, longitude: -43.355787 }
                function getDistanceFromLatLonInMeter(position1, position2) {
                    console.log("Entrou")
                    try {
                      let deg2rad = function (deg) {
                        return deg * (Math.PI / 180);
                      },
                        R = 6371,
                        dLat = deg2rad(position2.latitude - position1.latitude),
                        dLng = deg2rad(position2.longitude - position1.longitude),
                        a =
                          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                          Math.cos(deg2rad(position1.latitude)) *
                          Math.cos(deg2rad(position1.latitude)) *
                          Math.sin(dLng / 2) *
                          Math.sin(dLng / 2),
                        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                        const distance = (R * c * 1000).toFixed();

                        console.log("Distance", distance)
                      return distance;
                    } catch (error) {
                      console.log("Erro")
                      return 0;
                    }
                };

                getDistanceFromLatLonInMeter(position1, position2);

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
            longitude: currentRegion.longitude, phoneNumber: phoneNumber});

        const { _id } = response.data;

        navigation.navigate('Main', { user : _id });
    }

    return (
        <KeyboardAvoidingView 
            behavior="pading"
            enable={ Platform.OS === 'ios'}
            style={styles.container}>
            { inCadastro ? 
                <Text style={styles.linkCadastro} onPress={() => setInCadastro(false)}>Login </Text> :
                <Text style={styles.linkCadastro} onPress={() => setInCadastro(true)}>Cadastro </Text>
            }
     
            <Image style={styles.logo} source={logo}></Image>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Digite seu usuário do github"
            style={styles.input}
            onChangeText={ setUser }
            maxLength={30}
            >
            </TextInput>

            {inCadastro ?     <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Número do celular"
                style={styles.input}
                onChangeText={ setPhone }
                maxLength={9}
                >
                </TextInput>
            : null}
            
            <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderEndWidth: 1,
        borderColor: '#c1b0ad',
        borderWidth: 0.5,
        borderRadius: 15,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#b00d37',
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18

    },
    logo: {
        marginTop: 50,
        maxHeight: 80,
        maxWidth: 80,
    }
});
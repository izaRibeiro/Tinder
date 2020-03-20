import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
//import AssyncStorage from '@react-native-community/async-storage';

import logo from '../assets/logo.png';
import api from '../service/api';

export default function login({ navigation }){
    const [ user, setUser ] = useState('');
    
   /* useEffect(() => {
        AssyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', { user });
            }
        });
    }, []);*/

    async function handleLogin(){
        const response = await api.post('/devs', { username: user });

        const { _id } = response.data;

        //await AssyncStorage.setItem('user', _id);

        console.log(_id);

        navigation.navigate('Main', { user : _id });
    }
    
    return (
        <KeyboardAvoidingView 
            behavior="pading"
            enable={ Platform.OS === 'ios'}
            style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>

            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Digite seu usuário do github"
            style={styles.input}
            onChangeText={ setUser }
            >
            </TextInput>

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
    },
});
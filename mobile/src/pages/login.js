import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function login(){
    return (
        <KeyboardAvoidingView 
            behavior="pading"
            enable={ Platform.OS === 'ios'}
            style={styles.container}>
            <Text>Logo</Text>

            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Digite seu usuário do github"
            style={styles.input}
            >
            </TextInput>

            <TouchableOpacity
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

    }
});
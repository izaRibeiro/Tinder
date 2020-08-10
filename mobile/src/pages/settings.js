import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function Settings({ navigation }){

    async function handleMain(){
        navigation.navigate('Main');
    }

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Configurações </Text>
        
        <Text style={styles.textForm}>Nome de usuário </Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Nome de usuário"
            style={styles.input}> 
        </TextInput>

        <TouchableOpacity
        onPress={handleMain}
        style={styles.button}>
            <Text>Voltar</Text>
        </TouchableOpacity>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    title: {
        margin: 50,
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderEndWidth: 1,
        borderColor: '#c1b0ad',
        borderWidth: 0.5,
        borderRadius: 15,
        paddingHorizontal: 15,
        margin: 15,
        marginTop: 10,
    },
    textForm: {
        alignSelf: "flex-start",
        marginLeft: 30,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#b00d37',
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 300,
        marginHorizontal: 20,
        marginLeft: 250
    }
})
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

import { Voltar } from '../components/button-voltar'
import api from '../service/api';

export default function match({ navigation }){
    const id = navigation.getParam('user');
    let [users, setUsers] = useState([])
    let [numbers, setNumbers] = useState([])
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadNumbers() {
            const response = await api.get('/number', {
                headers: {
                    id: id
                }
            })
            setNumbers(response.data);
        }

        loadNumbers()
    }, [id])


    async function handleMain(){
        navigation.navigate('Main', { user: id } );
    }

    async function handleNumber(){
        return (numbers.map((number, index) => {
            <View key={ index }>
                <Text >Numero loooop: {number}</Text>
            </View>
        }))
    }

    return (
        <>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Número do celular"
            style={styles.input}
            maxLength={9}
            >
            </TextInput>

            <Text >{id}</Text>

            <Text >Numero do html: {numbers.length}</Text>
            <Text > Numero do ZERO: {numbers[0]}</Text>
            {numbers.forEach((number, index) => {
                <Text>Mamãto {number}</Text>
            })}

            {numbers.length === 0 ? <Text >ZEROOOU</Text> :
            handleNumber}

            <TouchableOpacity
            onPress={handleMain}
            style={styles.button}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </>
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
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#b00d37',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 200,
        marginHorizontal: 20,
        marginLeft: 250
    }
});
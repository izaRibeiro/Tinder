import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, ScrollView, View } from 'react-native';

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

    return (
        <>
            <Text style={styles.title}>Meus Contatinhos</Text>


            <ScrollView>

                {numbers.length === 0 ? <Text style={styles.contact}>Você ainda não tem contatinhos</Text> :
                numbers.map(number => <Text style={styles.contact}>{number}</Text>)}
         
            </ScrollView>
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
    },
    title: {
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20
    },
    contact: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginHorizontal: 20,
        marginTop: 10
    }
});
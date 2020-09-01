import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native-gesture-handler';

export default function voltar({ navigation }){
    //const id = navigation.getParam('user');
    // const [users, setUsers] = useState('')

    // async function handleMain(){
    //     navigation.navigate('Main', { user: id } );
    // }

    return (
        <TouchableOpacity
        //onPress={handleMain}
        style={styles.button}>
            <Text>Voltar</Text>
        </TouchableOpacity>

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
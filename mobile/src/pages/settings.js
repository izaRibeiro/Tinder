import React ,{useState} from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Slider } from 'react-native';
import api from '../service/api';


export default function Settings({ navigation }){
    const id = navigation.getParam('user');
    const [users, setUsers] = useState()
    const [bio, setBio] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    
    console.log("nome:", users)
    async function handleMain(){
        const response = await api.put(`devs/${id}`, { "name": users , "bio": bio , "phoneNumber": phoneNumber});

        navigation.navigate('Main', { user: id } );
    }

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Configurações </Text>
        
        <Text style={styles.textForm}>Nome de usuário</Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            
            style={styles.input}
            onChangeText={text => setUsers(text)}/> 

        <Text style={styles.textForm}>Biografia</Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            value={bio}
            style={styles.input}
            onChangeText={text => setBio(text)}/>

        <Text style={styles.textForm}>Telefone</Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            value={phoneNumber}
            style={styles.input}
            onChangeText={text => setPhoneNumber(text)}/>

        <Text style={styles.textForm}>Distância</Text>

        <Text style={styles.distanceText}>1km</Text>
        <Text style={styles.distanceText}>30km</Text>
        <Slider
            style={{width: 250, height: 40}}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#cc03d8"
            maximumTrackTintColor="#000000"
        />

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
    distanceText: {
    
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
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 200,
        marginHorizontal: 20,
        marginLeft: 250
    }
})
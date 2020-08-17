import React ,{useState, useCallback, useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Settings({ navigation }){
    const id = navigation.getParam('user');
    const [users, setUsers] = useState('')
    //const messages = [];

    async function handleMain(){
        navigation.navigate('Main', { user: id } );
    }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  
    return (
    <>
        <TouchableOpacity
        onPress={handleMain}
        style={styles.button}>
            <Text>Voltar</Text>
        </TouchableOpacity>
        
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
            _id: 1,
            }}
        />
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#b00d37',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginLeft: 250
    }
})
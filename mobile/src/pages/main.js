import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import io from 'socket.io-client';

import api from '../service/api';

import logo from '../assets/logo.png';
import gg from '../assets/GG.png';
import fail from '../assets/FAIL.png';
import cat from '../assets/catCrying.jpg';

export default function Main({ navigation }){
    const id = navigation.getParam('user');
    const [users, setUsers] = useState([])
    const [matchDev, setMatchDev] = useState(false);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: id
                }
            })
            setUsers(response.data);
        }
        loadUsers()
    }, [id])

    useEffect(() => {
        const socket = io('http://192.168.0.5:3333', { 
            query: {
                user: id
            }
        })

        socket.on('match', dev => {
            setMatchDev(dev)
        })
    }, [id])

    async function handleLike() {
        //[ ] pega a primeira posição do array e o rest representa o restante
        const [ user, ...rest ] = users;

        await api.post(`/devs/${user._id}/likes`, null, {
            headers: {
                user: id
            }
        })

        setUsers(rest);
    }

    async function handleDislike() {
        const [ user, ...rest ] = users;

        await api.post(`/devs/${user._id}/dislikes`, null, {
            headers: {
                user: id
            }
        })
        setUsers(rest);
    }


    async function handleLogout(){
        await AsyncStorage.clear();

        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}> 
        
            <Image style={styles.logo} source={logo}></Image>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.cardsContainer}>
            { users.length === 0 ? 
                <>
                <Image style={styles.cat} source={cat} />
                <Text style={styles.empty}> Ops ... parece que não há mais desenvolvedores por hoje. Em preve teremos mais</Text>
                </>
            : users.map((user, index) => 
            <View key={ user._id } style={[styles.card, { zIndex: users.length - index   }]}>
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
                <View style={styles.footer}>
                    <Text style={styles.name}> { user.name } </Text>
                    <Text style={styles.bio} numberOfLines={3}> { user.bio } </Text>
                </View>
            </View>)
            }
            </View>

            { 
              users.length > 0 &&
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleDislike}>
                    <Image source={fail} style={styles.buttonImageFail} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLike}>
                    <Image source={gg} style={styles.buttonImageGg} /> 
                </TouchableOpacity>
             </View>
            }

            { matchDev && (
                <View style={[styles.matchCoontainer,  { zIndex: users.length + 1   }]}>
                <Image style={styles.matchImage} source={gg}  /> 
       
                <Image style={styles.matchAvatar} source={{ uri: matchDev.avatar }}>
                </Image>
                
                    <Text style={styles.matchName}> { matchDev.name } </Text>
                    <Text style={styles.matchBio}> { matchDev.bio } </Text>

                    <TouchableOpacity onPress={() => setMatchDev(null)}>
                        <Text style={styles.closeMatch}>Fechar</Text>
                    </TouchableOpacity>
                    </View>
            )}

        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
        marginTop: 20,
    },
    card: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    avatar: {
        flex: 1,
        height: 300,

    },
    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 2,
        lineHeight: 15,
    },
    logo: {
        marginTop: 50,
        maxHeight: 80,
        maxWidth: 80,
    },
    logout: {
        
    },
    empty: {
        alignSelf: 'center',
        padding: 10,
        color: '#999',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        elevation: 2,
    },
    buttonImageGg: {
        maxHeight: 40,
        maxWidth: 40,
    },
    buttonImageFail: {
        maxHeight: 55,
        maxWidth: 55,
    },
    cat: {
        alignSelf: 'center',
        margin: 15,
        height: 200,
        width: 200
    },
    matchCoontainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    matchImage: {
        height: 80,
        resizeMode: 'contain'
    },
    matchAvatar: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 5,
        borderColor: '#FFF',
        marginVertical: 30,
    },
    matchName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF',
    },
    matchBio: {
        marginTop: 10,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal: 30
    },
    closeMatch: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold',
    }

});
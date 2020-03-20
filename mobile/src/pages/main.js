import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import api from '../service/api';

import logo from '../assets/logo.png';
import gg from '../assets/GG.png';
import fail from '../assets/FAIL.png';

export default function Main({ navigation }){
    const id = navigation.getParam('user');
    const [users, setUsers] = useState([])
    const [matchDev, setMatchDev] = useState(false)

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: id
                }
            })
            setUsers(response.data)
        }
        loadUsers()
    }, [id])

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: id
            }
        })
        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <SafeAreaView style={styles.container}> 
            <Image style={styles.logo} source={logo}></Image>

            <View style={styles.cardsContainer}>
            { users.map((user, index) => 
                <View key={ user._id } style={[styles.card, { zIndex: users.length - index }]}>
                    <Image style={styles.avatar} source={{ uri: user.avatar }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> { user.name } </Text>
                        <Text style={styles.bio} numberOfLines={3}> { user.bio } </Text>
                    </View>
                </View>)}
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={fail} style={styles.buttonImageFail} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={gg} style={styles.buttonImageGg} /> 
                </TouchableOpacity>
            </View>

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
    }
});
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Main(){
    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.logo}>Logoooooooooooo</Text>
            <View style={styles.cardsContainer}>
                <View style={[styles.card, { zIndex: 3}]}>
                    <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/42190732?v=4" }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Nome </Text>
                        <Text style={styles.bio} numberOfLines={3}>OpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpa  </Text>
                    </View>
                </View>

                <View style={[styles.card, { zIndex: 2}]}>
                    <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/42190732?v=4" }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Nome </Text>
                        <Text style={styles.bio} numberOfLines={3}> OpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpa</Text>
                    </View>
                </View>

                <View style={[styles.card, { zIndex: 1}]}>
                    <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/42190732?v=4" }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Nome </Text>
                        <Text style={styles.bio} numberOfLines={3}> OpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpaOpa </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Dislike</Text>
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
        marginTop: 80
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
        bottom: 0
    },
    avatar: {
        flex: 1,
        height: 300,
    },
    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 2,
        lineHeight: 15
    },
    logo: {
        marginTop: 50
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
        elevation: 2
    }
});
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('TodoList');
        }, 1000);
    });

  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/todoIcon.png')} sytle={styles.image} />
        <Text style={styles.name}>TodoList App</Text>
    </SafeAreaView>
    );
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
    },
    image:{
        width: 40,
    },
    name:{
        fontSize: 28,
        fontWeight: 'bold',
    },
});
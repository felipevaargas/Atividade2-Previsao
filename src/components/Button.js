import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Buttons({ geoCode, buttonText, screenName }) {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate(screenName, { paramKeyGeoCode: geoCode })}
            >
                    <Text style={styles.text}> {buttonText} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        width: 300,
        borderRadius: 5,
        margin: 10,
        marginBottom: 10,
        padding: 5,
        borderWidth: 0
    },
    text: {
        fontSize: 20,
        padding: 7
    }
});
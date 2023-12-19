import React from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import { useFonts, Alata_400Regular } from '@expo-google-fonts/alata';

const CustomButton = ({onPress, text}) => {
    useFonts({
        Alata_400Regular
    }); 
    
    return (
        <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({ // TODO fix style
    container: {
        backgroundColor: '#EB3737',
        width: 250,
        height: 62,
        padding: 10,
        marginVertical: 50,
        alignItems: 'center',
        borderRadius: 16
    },

    text: {
        // fontFamily: 'Alata400_Regular',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
    },

    
})

export default CustomButton;
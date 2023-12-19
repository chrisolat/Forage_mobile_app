import React, { useState } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


function RecipeTag( {tag} ) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{tag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF894C',
        borderRadius: '10%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        padding: '2%',
        marginLeft: '3%',
        marginBottom: '3%',
        marginRight: '1%'
    },

    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})
export default RecipeTag
import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Face from '../assets/AndrewTate.png'
import Food from '../assets/tomato-spinach-chicken-pasta-1.jpg'
import Food2 from '../assets/easy-banana-muffin-recipe.jpg'
import Food3 from '../assets/Banana-Pudding-SQ.jpg'
import Food4 from '../assets/All-American-Banana-Split.jpg'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

const FavoritesScreen = () => {
    
    return (
        
        <View style={styles.container}>
            <Text style = {styles.title}>Favorites</Text>
            <View style = {styles.root}>
                <View style = {styles.box}>
                    <Image source = {Food} style={styles.image} resizeMode = "contain" />
                    <Text style = {styles.name}>Chicken Pasta</Text>
                </View>
                <View style = {styles.box}>
                    <Image source = {Food2} style={styles.image} resizeMode = "contain" />
                    <Text style = {styles.name}>Banana Muffin</Text>
                </View>
                <View style = {styles.box}>
                    <Image source = {Food3} style={styles.image} resizeMode = "contain" />
                    <Text style = {styles.name}>Banana Pudding</Text>
                </View>
                <View style = {styles.box}>
                    <Image source = {Food4} style={styles.image} resizeMode = "contain" />
                    <Text style = {styles.name}>Banana Split</Text>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
        
    },

    root: {
        flexWrap: 'wrap',
        flexDirection: 'row',

    },

    box: {
        borderWidth: .5,
        borderColor: "#EB3737",
        width: "50%",
        height: "60%",
    },

    title: {
        alignSelf: "flex-start",
        fontSize: 35,
        top: 25,
        left: 20,
        paddingBottom: 40,

    },

    image: {
        top: 15,
        alignSelf: 'center',
        width: 140,
        height: 140,
        borderColor: '#EB3737',
        borderWidth: 1,

    },

    name: {
        alignSelf: 'center',
        fontSize: 20,
        top: 20,
    },
    
    text: {
        color: '#EB3737'
    },
})

export default FavoritesScreen
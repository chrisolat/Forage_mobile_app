import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Face from '../assets/AndrewTate.png'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

const ProfileScreen = () => {
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Profile</Text>
            <View style = {styles.root}>
                <Image source = {Face} style={styles.image} resizeMode = "contain" />
                <Text style = {styles.name}>Andrew Tate</Text>
                <Text style = {styles.text}>Change Username</Text>
                <Text style = {styles.text}>Change Password</Text>
                <Text style = {styles.text}>Create Recipe</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
        
    },

    title: {
        alignSelf: "flex-start",
        fontSize: 35,
        top: 25,
        left: 20,
        paddingBottom: 30,

    },

    root: {
        //flex: 1,
        //backgroundColor: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },

    image: {
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderColor: '#EB3737',
        borderWidth: 3,
        borderRadius: 400/2,
        left: 75

    },
    
    name: {
        alignSelf: 'center',
        fontSize: 20,
        top: 10,
        paddingBottom: 50
    },
    
    text: {
        fontSize: 20,
        color: 'black',
        borderBottomColor: '#EB3737',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 20,

    },


})

export default ProfileScreen
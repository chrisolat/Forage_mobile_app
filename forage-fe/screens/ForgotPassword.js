import React, {useState} from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png' 
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

const LoginScreen = () => {
    

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}, watch} = useForm();

    const onResetPasswordPressed = (data) => {
        // TODO add feature
        console.log(data)
        console.warn("reset password");
    }

    const onBacktoSignInPressed = () => {
        navigation.navigate("Login")
    }

    const email_regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/ // TODO find better regex string
    return (
        
            <View style={styles.root}>
                <Image source = {Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode = "contain" />

                <CustomInput name="resetpassword" placeholder="Enter Email ID" control={control} rules={{required:"Please enter Email ID", pattern:{value:email_regex, message:"Email address is invalid"}}} />
                

                <CustomButton text="Reset Password" onPress={handleSubmit(onResetPasswordPressed)}/>

                <Text style={styles.text} onPress={onBacktoSignInPressed}>Back to Sign in</Text>
                
            </View>
        
    )
}

const styles = StyleSheet.create({ // TODO fix style
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    text: {
        color: 'blue'
    }
})

export default LoginScreen
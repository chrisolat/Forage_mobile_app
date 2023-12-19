
// TODO copy of ForgotPasswordScreen. Yet to be implemented


import React, {useState} from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/icon.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'

const LoginScreen = () => {
    const [emailId, setemailId] = useState('');
    

    const {height} = useWindowDimensions();

    const onResetPasswordPressed = () => {
        console.warn("reset password");
    }

    const onBacktoSignInPressed = () => {
        console.warn("back to sign in");
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source = {Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode = "contain" />

                <CustomInput placeholder="Enter Email ID" value={emailId} setValue={setemailId}/>
                

                <CustomButton text="Reset Password" onPress={onResetPasswordPressed}/>

                <Text style={styles.text} onPress={onBacktoSignInPressed}>Back to Sign in</Text>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({ // TODO fix style
    root: {
        alignItems: 'center',
        padding: 20, 
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
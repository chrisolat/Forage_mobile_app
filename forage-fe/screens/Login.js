import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {useForm, Controller} from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler'

const LoginScreen = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();


    const onLoginPressed = async (data) => {
        
        
        const response = await axios.post("http://localhost:3000/auth/login", data)
        if (response.data.code === 200){
            navigation.navigate("Scanner")
        }
        else{
            //TODO figure out what happens if login fails
        }
    
        

    }

    const onForgotPasswordPressed = () => {
        // TODO add feature
        navigation.navigate("ForgotPassword");
    }

    const onSignUpPressed = () => {
        // TODO add feature
        navigation.navigate("Signup");
    }

    const onScanNowPressed = () => {
        navigation.navigate("Scanner");
    }

    return (
        <View style={styles.root}>
            <Image source = {Logo} 
            style={styles.logo} 
            resizeMode = "contain" />

            <CustomInput name="Username" placeholder="Username" control={control} rules={{required: "Username is required"}} />
            <CustomInput name="Password" placeholder="Password" control={control} rules={{required: "Password is required"}} secureTextEntry/>
            

            <CustomButton text="Log in" onPress={handleSubmit(onLoginPressed)}/>

            <Text style={styles.text} onPress={onScanNowPressed}>Scan Now</Text>
            <Text style={styles.text} onPress={onSignUpPressed}>Don't have an account? Sign up</Text>
            <Text style={styles.text} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
            
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
        width: 363,
        height: 254,
        top: -30
    },
    text: {
        color: 'blue'
    },
    incorrect: {
        color: 'red'
    },
    username: {
        position:'absolute',
        top:900
    }
})

export default LoginScreen
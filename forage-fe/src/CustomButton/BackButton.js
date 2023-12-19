import React from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const BackButton = () => {
    const navigation = useNavigation()

    const onBackButtonPress = () => {
        navigation.goBack()
    }
    return (
        <Pressable onPress={onBackButtonPress} style={styles.back}>
            <Ionicons name="chevron-back" color={"red"} size={'40%'}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    back: {
        marginLeft: '5%',
        marginBottom: '5%',
        backgroundColor: '#F5F5F5',
        width: '11%',
        borderRadius: '10%'
    }
})

export default BackButton;
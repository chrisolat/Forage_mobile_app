import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
import BarcodeScanner from '../src/ScannerComponents/BarcodeScanner';

const PantryScreen = () => {
    const [pantryList, setPantryList] = useState([])


    const onAddtoPantryPressed = () => {
        // pull up scanner
    }

    return (
        <View style={styles.root}>
            {pantryList.length > 0 ? <Text>Items in pantry</Text> : <Text>No items in pantry</Text>}
            <CustomButton text="Add to Pantry" onPress={onAddtoPantryPressed}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    text: {
        color: '#EB3737'
    },
})

export default PantryScreen
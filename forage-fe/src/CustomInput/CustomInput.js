import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({control, name, rules={}, placeholder, secureTextEntry}) => {
    return (
        
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => 
                (
                <>
                <View style={[styles.container, {borderColor: error ? 'red' : 'white'}]}>
                    <TextInput 
                        value={value} 
                        onChangeText={onChange} 
                        onBlur={onBlur} 
                        placeholder={placeholder}
                        style={[styles.input, {}]}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
                {error && <Text style={{color: 'red', alignSelf: 'center'}}>{error.message || 'Error'}</Text>}
                </>
                )}
                />
        
    )
}

const styles = StyleSheet.create({ // TODO fix style
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: '4%',
        borderColor: 'white',
        borderBottomColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        color: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 10,
    },
    input: {
    },

    placeholder:{}
});

export default CustomInput;
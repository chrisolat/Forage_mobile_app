import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView, Pressable } from 'react-native'
import Swiper from 'react-native-swiper'
import BackButton from '../src/CustomButton/BackButton';
import apikey from '../src/apiKey';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Like from '../src/RecipeComponents/Like';

const RecipeInfoScreen = ( {route} ) => {
    const [recipeinfo, setRecipeinfo] = useState([])
    const [recipeSteps, setRecipeSteps] = useState([])
    const recipe = route.params.recipe
    // TODO: Make API key secret
    const recipeApiKey = apikey;
    const recipesUrl = `https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${recipeApiKey}`
    // https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=4a1a5f9e9b3b456bac7a6119b023590e

    
    useEffect(() => {
        fetch(recipesUrl)
        .then((response) => response.json())
        .then((json) => {
            if(json.length > 0){
                setRecipeSteps(json[0].steps)
                setRecipeinfo(json)
            }
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <SafeAreaView style={styles.root}>
            <BackButton style={styles.back}/>
            <View style={styles.titleBox}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Like />
            </View>
            <Image style={styles.recipeImage} source={{uri: recipe.image}}/>
            <Text style={styles.directionTitle}>Directions: </Text>
            
            {recipeinfo.length>0 ? 
            <Swiper style={styles.directionBox}>
                {recipeSteps.map((recipeStep, index)=>
                    <ScrollView style={styles.directionBox} key={index}>
                        <Text style = {styles.recipeStepNum}>Step {index + 1}</Text>
                        <Text style = {styles.recipeText}>{recipeStep.step}</Text>
                    </ScrollView> 
                )}
            </Swiper> : <Text style={styles.recipeStepNum}>No directions available</Text>}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
    },
    recipeImage: {
        width: '90%',
        height: '30%',
        margin: '5%',
    },

    recipeTitle: {
        fontSize: '30em',
        fontWeight: 'bold',
        width: '75%',
        marginHorizontal: '5%',
        marginBottom: '0%',
    },

    recipeText: {
        color: '#363636',
        marginLeft: '5%',
        width: '90%',
        fontSize: '20em'
    },

    recipeStepNum: {
        color: '#EB3737',
        fontSize: '20em',
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '2%'
    },

    directionTitle: {
        fontSize: '22em',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    directionBox: {

    },

    titleBox:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default RecipeInfoScreen
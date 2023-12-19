import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import RecipeItem from '../src/RecipeComponents/RecipeItem'
import apikey from '../src/apiKey'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RecipeTag from '../src/RecipeComponents/RecipeTag'


const RecipesScreen = () => {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [dataSource, setDataSource] = useState([]);
    const [recipes, setRecipes] = useState([]) //TODO change

    // TODO: Make API key secret
    const recipeApiKey = apikey;
    const recipesUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
    const searchRecipeUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey="

    useEffect(() => {
        fetch(recipesUrl + recipeApiKey + "&ingredients=" + "apple,sugar&")
        .then((response) => response.json())
        .then((json) => {
            setRecipes(json)
            setDataSource(json)
        })
        .catch((error) => alert(error))
    }, [])    

    const navigation = useNavigation();

    const searchFunction = (text) => {
        if (text){
            fetch(searchRecipeUrl + recipeApiKey + "&query=" + text)
            .then((response) => response.json())
            .then((json) => {
                setRecipes(json.results)
                setDataSource(json.results)
            })
            .catch((error) => alert(error))
            // const newData = recipes.filter(function (item) {
            //     return item["title"].toLowerCase().includes(text.toLowerCase())
            // })

            setSearchBarValue(text)
        }
        else{
            setRecipes(dataSource)
            setSearchBarValue(text)
        }
    }

    function onPressRecipe(recipe) {
        navigation.navigate("RecipeInfo", {recipe});
    }
    
    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' value={searchBarValue} onChangeText={ (text) => searchFunction(text)} style={styles.searchBar}/>
            <Ionicons style={styles.funnel} name={"funnel-outline"} color={"black"} size="30%"/>

            {recipes.length>0 &&
            <ScrollView style={styles.allRecipes}>
                <View style={styles.recipeTags}>
                    <RecipeTag tag= "Trending"/>
                    <RecipeTag tag= "Healthy"/>
                </View>
                
                {recipes.map((recipe) => (
                    <Pressable onPress={() => onPressRecipe(recipe)} key={recipe.id}>
                        <RecipeItem recipe={recipe} />
                    </Pressable>
                ))}
            </ScrollView>}
        </View>
    )
}
export default RecipesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF',
    },

    allRecipes: {
        top: '5%',
    },

    searchBar: {
        backgroundColor: '#FBFBFB',
        top: '7%',
        left:'2%',
        width: '85%',
        height: '5%',
        paddingLeft: '5%',

        borderWidth: 2,
        borderColor: "#EBEBEB",
        borderRadius: 100
    },

    funnel:{
        top: '3%',
        left:'90%',
        width:'10%',
    },

    recipeTags: {
        flexDirection: 'row'
    }
})

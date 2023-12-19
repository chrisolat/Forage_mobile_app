import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import RecipeItem from '../src/RecipeComponents/RecipeItem'
import apikey from '../src/apiKey'
import ingredients from "../src/ScannerComponents/ingredientList.json"


const RecipesScreen = ({ route }) => {
    const [recipes, setRecipes] = useState([])
    const [dataSource, setDataSource] = useState([]);
    const [searchBarValue, setSearchBarValue] = useState('');

    // TODO: Make API key secret
    const recipeApiKey = apikey;
    const recipesUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
    const ingredientJson = route.params.scannedItems
    var ingredientTitles = ""

    const navigation = useNavigation();

    useEffect(() => {
        for (let i in ingredientJson) {
            ingredientTitles += getIngredients(ingredientJson[i].title) + ","
        }

        console.log(ingredientTitles)
        fetch(recipesUrl + recipeApiKey + "&ingredients=" + ingredientTitles)
            .then((response) => response.json())
            .then((json) => {
                setRecipes(json)
                setDataSource(json)
            })
            .catch((error) => alert(error))
    }, [])

    // Get passable api Ingredient from scanned name
    const getIngredients = (a) => {
        a = a
            .replace(/[.,\/#!$%\^&\*;:{}=\-_'`~()]/g, "")
            .toLowerCase()
            .split(" ");
        let result = [];
        let min_len = ingredients[0][0].length;
        for (var i = a.length; i >= 1; i--) {
            for (var j = 0; j + i <= a.length; j++) {
                let name = a.slice(j, i + j).join(" ");
                let index = name.length - min_len;
                if (index > 0 && index < ingredients.length) {
                    if (ingredients[index].includes(name)) {
                        result.push(name);
                    } else {
                        let threshold = Math.max(0.2 * name.length, 1);
                        let n = Math.floor(threshold);
                        for (let r = -1 * n; r < n; r++) {
                            if (index + r < 0 || index + r >= ingredients.length) {
                                break;
                            }
                            let temp = closest(name, ingredients[index + r]);
                            temp = temp ? temp : "";
                            if (distance(temp, name) < threshold) {
                                result.push(temp);
                            }
                        }
                    }
                }
            }
        }
        for (const [index, element] of result.entries()) {
            j = 0;
            while (j < result.length) {
                if (j == index) {
                    j++;
                    continue;
                }
                if (result[j].includes(element)) {
                    result.splice(index, 1);
                    break;
                }
                j++;
            }
        }

        return result.join(" ");
    };

    const searchFunction = (text) => {
        if (text) {
            setRecipes(dataSource)
            const newData = recipes.filter(function (item) {
                return item["title"].toLowerCase().includes(text.toLowerCase())
            })
            setRecipes(newData)
            setSearchBarValue(text)
        }
        else {
            setRecipes(dataSource)
            setSearchBarValue(text)
        }
    }

    function onPressRecipe(recipe) {

        navigation.navigate("RecipeInfo", { recipe });
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' value={searchBarValue} onChangeText={(text) => searchFunction(text)} style={styles.searchBar} />
            <ScrollView style={styles.allRecipes}>
                {recipes.map((recipe) => (
                    <Pressable onPress={() => onPressRecipe(recipe)} key={recipe.id}>
                        <RecipeItem recipe={recipe} />
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

export default RecipesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    allRecipes: {
        top: '10%',
    },

    searchBar: {
        backgroundColor: '#FBFBFB',
        top: '7%',
        left: '2%',
        width: '85%',
        height: '5%',
        paddingLeft: '5%',

        borderWidth: 2,
        borderColor: "#EBEBEB",
        borderRadius: 100
    },

})

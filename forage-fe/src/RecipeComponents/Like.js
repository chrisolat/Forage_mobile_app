import React, { useState } from 'react'
import { Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import { combineTransition } from 'react-native-reanimated'


function Like({recipe}) {
    const [likeIcon, setLikeIcon] = useState("heart-outline")
    const [likedRecipes, setLikedRecipes] = useState([])

    async function onPressLike() {
        // console.log(recipe.id)
        const token = await axios.post("http://localhost:3000/auth/login", {username:"testuser3", password:"password"})
        const config = {
            headers: { Authorization: `Bearer ${token.data.access_token}` }
        }
        if (likeIcon == "heart-outline") {
            setLikeIcon("heart")
            
            const Liked = await axios.post("http://localhost:3000/likes/like", {apiId: recipe.id.toString()}, config)
            // console.log(Liked.data)
            //Liked.push(recipe.id)
            // axios.post("http://localhost:3000/likes/like", Liked)
            
        }
        else {
            setLikeIcon("heart-outline")

            const unLiked = await axios.get("http://localhost:3000/likes/unlike", {apiId:recipe.id.toString()}, config)
            
        }
    }

    return (
        <Pressable onPress={() => onPressLike()}>
            <Ionicons name={likeIcon} color={"red"} size="28%"/>
        </Pressable>
    )
}

export default Like
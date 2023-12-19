import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import SplashScreen from '../screens/Splash';
import LoginScreen from "../screens/Login";
import SignupScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import ScannerScreen from '../screens/Scanner';
import RecipesScreen from '../screens/Recipes';
import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import PantryScreen from '../screens/Pantry';
import ProfileScreen from '../screens/Profile';
import RecipeInfoScreen from '../screens/RecipeInfo';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();


function ScannerStackScreen(){
    return(
        <Tab.Navigator 
            initialRouteName='Main'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#EB3737",
                tabBarInactiveTintColor: "#363636",
                tabBarShowLabel: false,
                tabBarStyle: [
                  {
                    "display": "flex"
                  },
                  null
                ]
              }}
            
            
        >
            
            <Tab.Screen name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" color={color} size="30%"/>
                )
            }}
            
            />
            <Tab.Screen name="Favorites" 
            component={FavoritesScreen}
            options={{
                tabBarLabel: "Favorites",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="heart-outline" color={color} size="30%"/>
                )
            }}
            />
            <Tab.Screen name="Main" 
                component={ScannerScreen} 
                options={{
                    tabBarLabel: "Scanner",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="camera-outline" color={color} size="35%"/>
                    )
                }}
            />
            <Tab.Screen name="Pantry" 
            component={PantryScreen} 
            options={{
                tabBarLabel: "Pantry",
                tabBarIcon:({color, size}) => (
                    <Ionicons name="cart-outline" color={color} size="33%"/>
                )
            }}
            />
            <Tab.Screen name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon:({color, size}) => (
                    <Ionicons name="person-outline" color={color} size="30%"/>
                )
            }}
            />
        </Tab.Navigator>
    )
}


const Stack = createNativeStackNavigator();

const NavigationBar = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splash" component={SplashScreen} options={{title:"",headerBackTitleVisible: false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{title:"",headerBackTitleVisible: false}}/>
                <Stack.Screen name="Signup" component={SignupScreen} options={{title:"",headerBackTitleVisible: false}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title:"",headerBackTitleVisible: false}}/>
                <Stack.Screen name="Scanner" component={ScannerStackScreen} options={{title:"",headerBackTitleVisible: false}}/>
                <Stack.Screen name="Recipes" component={RecipesScreen} options={{title:"",headerBackTitleVisible: false}}/>
                <Stack.Screen name="RecipeInfo" component={RecipeInfoScreen} options={{title:"", headerBackTitleVisible: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationBar;
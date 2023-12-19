

// // DEPRECATED

// import React from "react";
// import { View, Text } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SplashScreen from '../screens/Splash';
// import LoginScreen from "../screens/Login";
// import SignupScreen from '../screens/SignUp';
// import ForgotPasswordScreen from '../screens/ForgotPassword';
// import ScannerScreen from '../screens/Scanner';
// import Recipes from '../screens/Recipes';

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="Splash" component={SplashScreen} />
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="Signup" component={SignupScreen} />
//                 <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//                 <Stack.Screen name="Scanner" component={ScannerScreen} />
//                 <Stack.Screen name="Recipes" component={Recipes}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default Navigation;
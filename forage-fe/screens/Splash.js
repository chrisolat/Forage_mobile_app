import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  
  setTimeout(() => {
    setLoading(true);
    navigation.navigate("Login")
  }, 2000);

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={loading}
      logoImage={require("./../assets/splash.png")}
      backgroundColor={"#EB3737"}
      logoHeight={500}
      logoWidth={500}
    >
      
    </AnimatedSplash>
  );
}

const styles = StyleSheet.create({ // TODO fix style
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
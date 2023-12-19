import React, { useEffect, useRef, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import CustomButton from '../src/CustomButton/CustomButton';
import BarcodeScanner from '../src/ScannerComponents/BarcodeScanner';

function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);

  // Request Camera Permission
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);

  // Check Permission and return screens
  if (hasPermission === null) {
    return (
      <View>
        <Text>Requsting camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>;
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} /> 
      </View>
    )
  }

  // Return scanner
  return (
    <BarcodeScanner />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    top: 20
  },
  scanImage: {
    width: '100%',
    height: '100%',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 30,
  },
  sheetStyle: {
    flexDirection:'row'
  }
});


export default Scanner
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CameraScreen from './src/Screens/CameraScreen';


export default function App() {

  const [count, setCount] = useState(0);



  return (
    <View style={styles.container}>

      {/* for camera on  */}
      
      {
        count == 0 ?
          <Button
           title="Camera"
            color="#841584"
            onPress={() => {

               setCount(count + 1);
             }

            }
          /> 
          : null

      }

      {
        count ? <CameraScreen /> : <Text>Count : {count}</Text>
      }



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




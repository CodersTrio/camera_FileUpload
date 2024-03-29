import React, { useState, useEffect } from 'react';

import * as ImagePicker from 'expo-image-picker';

import { Button, Image, View, Platform } from 'react-native';



const FileUpload = () => {

  const [image, setImage] = useState(null);



  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, Camera roll permissions are required to make this work!');
        }
      }
    })();
  }, []);




  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  console.log("image uri : ", image);





  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

      <Button title="Choose image from Gallery" onPress={chooseImg} />

      {/* if img found,then img showing ...  */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

    </View>

  );
}

export default FileUpload ;
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity  } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Camera} from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import Popup from './Popup';


const Cam = () => {
  let camera;
  
  const [hasPermission, setHasPermission] = useState(null);
  const [snappedPhoto, setSnappedPhoto] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const afterMountAndSnap = () => {
    //console.log("Delete Score.");
    setSnappedPhoto(false);
  }
  useEffect(() => {
  if(snappedPhoto != false) {
    setTimeout(afterMountAndSnap,2000);
  }
  }, [snappedPhoto]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  
  const callGoogleApi = async (base64) => {
    let object = {
      instances: [{
        content: base64
      }],
      parameters: {
        confidenceThreshold: 0.5,
        maxPredictions: 5
      }
    }

    fetch("https://us-central1-aiplatform.googleapis.com/v1/projects/{MODEL}/locations/us-central1/endpoints/{ENDPOINT-ID}:predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer {API_KEY}}",
      },
      body: JSON.stringify(object)
    }
    ).then((response) => response.json())
    .then((prediction) => setSnappedPhoto(prediction))

  }

  const snap = async () => {
    if (this.camera) {
      let options = {quality: 0.4, base64: false}
      let photo = await this.camera.takePictureAsync(options);
      
      const resizedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: 500, height: 500 } }], // resize to width of 300 and preserve aspect ratio 
        { base64: true, compress: 0.7, format: 'jpeg'},
      );
      console.log(resizedPhoto.base64);
      callGoogleApi(resizedPhoto.base64);
    }
  };

  const getValues = () => {
    console.log(snappedPhoto)
    let fetchedPredictions = snappedPhoto.predictions;
    let fetchedQualifiers = fetchedPredictions[0];

    return [fetchedQualifiers.displayNames[0], fetchedQualifiers.confidences[0]];
  }

  return (    
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={type}
        ref={ref => {
          this.camera = ref;
        }}>
        <View style={styles.container}>
          {snappedPhoto != false && 
          (<Popup wasteType={getValues()[0]}
                  percentage={getValues()[1]}/>)}
          <View
            style={{
              flex: 1,
              position: 'absolute',
              marginHorizontal: '40.5%',
              bottom: 125,
            }}
          > 
            <TouchableOpacity
              onPress={snap}
              style={{
                width: 75,
                borderRadius: "50%",
                borderWidth: 4,
                borderColor:'white',
                backgroundColor: 'rgba(52, 52, 52, 0.11)',
                flexDirection: 'row',
                height: 75,
              }}
            />
          </View>

          <StatusBar style="auto" />
        </View>
      </Camera>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  }
})

export default Cam;
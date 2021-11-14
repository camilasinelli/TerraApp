import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import Cam from '../Cam'
const windowWidth = Dimensions.get('window').width;

const CameraScreen = ({navigation}) => {
  return (
      <Cam>
      </Cam>
  );
};

export default CameraScreen;
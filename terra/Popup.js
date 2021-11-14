import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';


export default function Popup(props) {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  let waste = props.wasteType;
  let capitalizedWaste = waste.charAt(0).toUpperCase() + waste.slice(1);
  let percentage = (props.percentage*100).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: 'rgba(240, 240, 240, 0.4)',
        width: 215,
        height: 205,
        borderRadius: 1000,
        textAlign: 'center',
      }}>
        <Text style={{   
          fontFamily: "Raleway_400Regular",
          textAlignVertical: "center",
          textAlign: "center",
          marginTop: 60,
          color: 'rgb(32, 133, 40)',
          fontSize: 42,
        }}>
          {capitalizedWaste}
        </Text>
        <Text style={{
          fontFamily: "Raleway_400Regular",
          textAlignVertical: "center",
          textAlign: "center",
          fontSize: 22,
        }}>
          {percentage}% Probability
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

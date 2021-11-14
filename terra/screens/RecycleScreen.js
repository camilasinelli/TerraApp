import * as React from 'react';
import MapView from 'react-native-maps';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.597377,
          longitude: -81.303592,
          latitudeDelta: 0.622,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          coordinate={{ latitude: 28.597377, longitude: -81.303592 }}
          image={require('../icons8-location-pin-100.png')}
          title={'Your Location'}
        />
        <MapView.Circle
          center={{ latitude: 28.597377, longitude: -81.303592 }}
          radius={6000}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.5254912, longitude: -81.3830294 }}
          pinColor={'blue'}
          title={'Sonoco Recycling'}
          description={'Sustainability consulting firm'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.632408, longitude: -81.46692 }}
          pinColor={'blue'}
          title={'CMC Recycling'}
          description={"Recycling center in Orange County"}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.666781, longitude: -81.3773282 }}
          pinColor={'blue'}
          title={'ecoATM'}
          description={'Produce a variety of mulches and soils from waste'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.284143, longitude: -81.4573944 }}
          pinColor={'blue'}
          title={'Osceola County Solid Waste'}
          description={'Fine soil improver and composted manure'}
        />
        <MapView.Marker
          coordinate={{ latitude: 29.0241928, longitude: -81.3514731 }}
          pinColor={'blue'}
          title={'Dominion Metal Recycling'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 29.036124, longitude: -81.96682 }}
          pinColor={'blue'}
          title={'Davis Recycling Center'}
          description={'Center for community recycling'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.705924, longitude: -81.340639 }}
          pinColor={'blue'}
          title={'Central Transfer Station MSW'}
          description={'Station for recycling materials'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.52008, longitude: -81.381678 }}
          pinColor={'blue'}
          title={'Trademark Metals Recycling'}
          description={'Center for recycling metals'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.618319, longitude: -81.398237 }}
          pinColor={'blue'}
          title={'The Mustard Seed of Central Florida'}
          description={'Furniture and clothing recyling'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.4096034, longitude: -80.7621164 }}
          pinColor={'blue'}
          title={'ATM Recycling'}
          description={'Drop-off recycling center'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.6521738, longitude: -81.2082402 }}
          pinColor={'blue'}
          title={'Seminole Recycling Inc'}
          description={'Recycling Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.6668162, longitude: -81.1834896 }}
          pinColor={'blue'}
          title={'Recycled Concrete & Materials, Inc.'}
          description={'Drop-off concrete recycling'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.473604, longitude: -81.297605 }}
          pinColor={'blue'}
          title={'Scrap Metal Trading Corp'}
          description={'Metal recycling center'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.7869122, longitude: -81.2191609 }}
          pinColor={'blue'}
          title={'ATM Recycling'}
          description={'Drop-off location for materials'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.436134, longitude: -81.375355 }}
          pinColor={'blue'}
          title={'Metals Recycling'}
          description={'Recycle center for metals'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.4224961, longitude: -81.3509932 }}
          pinColor={'blue'}
          title={'Recycling'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.61137060287513, longitude: -81.28206956335504 }}
          pinColor={'blue'}
          title={'Medigreen'}
          description={'Drop-off center for recycled materials'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.5659297, longitude: -81.2177891 }}
          pinColor={'blue'}
          title={'ecoTM'}
          description={'ATM for materials to be recycled'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.561790466308594, longitude: -81.29248046875 }}
          pinColor={'blue'}
          title={'Orlando Recycles, Inc.'}
          description={'Orlando\'s Recycling Center'}
        />
      </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

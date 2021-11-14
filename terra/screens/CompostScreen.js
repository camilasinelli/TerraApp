import * as React from 'react';
import MapView from 'react-native-maps';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';

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
          coordinate={{ latitude: 28.54914, longitude: -81.3732 }}
          pinColor={'green'}
          title={'Eco Strategies Group'}
          description={'Sustainability consulting firm'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.5894, longitude: -81.23018 }}
          pinColor={'green'}
          title={'O-Town Compost'}
          description={"Orlando's community composter"}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.7443, longitude: -82.0602 }}
          pinColor={'green'}
          title={'CompostUSA of Sumter Co.'}
          description={'Produce a variety of mulches and soils from waste'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.92172, longitude: -82.10018 }}
          pinColor={'green'}
          title={'Black Gold Compost Company'}
          description={'Fine soil improver and composted manure'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.12245, longitude: -82.43725 }}
          pinColor={'green'}
          title={'Natural Designs Landscaping'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{
            latitude: 28.589969635009766,
            longitude: -81.36089324951172,
          }}
          pinColor={'green'}
          title={'Mead Community Garden'}
          description={'Community composter'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.55752, longitude: -81.347957 }}
          pinColor={'green'}
          title={'Community Garden'}
          description={'Compost center and community garden'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.5615687, longitude: -81.3616283 }}
          pinColor={'green'}
          title={'Colonialtown Community Garden'}
          description={'Garden/Compost center'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.7959284, longitude: -81.2721282 }}
          pinColor={'green'}
          title={'Sanford Community Garden'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{
            latitude: 28.618858337402344,
            longitude: -81.25393676757812,
          }}
          pinColor={'green'}
          title={'The Community Garden of Oviedo'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.5831468, longitude: -81.3602127 }}
          pinColor={'green'}
          title={'Winter Park Garden Club'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.69389, longitude: -81.179924 }}
          pinColor={'green'}
          title={'The Oviedo Nursery'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.705924, longitude: -81.340639 }}
          pinColor={'green'}
          title={'Seminole County Solid Waste'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.648283, longitude: -81.231892 }}
          pinColor={'green'}
          title={'Lukas Nursery & Butterfly Encounter'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.5834811, longitude: -81.3910668 }}
          pinColor={'green'}
          title={"Apenberry's Gardens"}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.6108391, longitude: -81.3281589 }}
          pinColor={'green'}
          title={'Towns Garden Center'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.4751913, longitude: -81.3636159 }}
          pinColor={'green'}
          title={'Clifton’s Nursery and Garden Center'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.480872, longitude: -81.216534 }}
          pinColor={'green'}
          title={'Orange County Solid Waste Division'}
          description={'Landscape Management Industry'}
        />
        <MapView.Marker
          coordinate={{ latitude: 28.4615091, longitude: -81.2725717 }}
          pinColor={'green'}
          title={'A A Auto Recycling'}
          description={'Landscape Management Industry'}
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

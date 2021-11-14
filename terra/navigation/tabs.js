import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import CameraScreen from '../screens/CameraScreen';
import CompostScreen from '../screens/CompostScreen';
import RecycleScreen from '../screens/RecycleScreen';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';

const Tab = createBottomTabNavigator();
console.log(Constants.statusBarHeight);

const Tabs = () => {
  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        headerShown: true
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 90,
          shadowColor: '#3f3e40',
          shadowOffset: { 
            width: 0, 
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5
        },
      }}
      initialRouteName="Terra"
      >
      <Tab.Screen name="Compost" component={CompostScreen} options={{
        headerShown: true,
        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular',
                      color: 'rgb(32, 133, 40)',
                      fontSize: 30},
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 13}}>
            <Image 
              source={require('../icons8-compost-heap-50.png')}
              resizeMode='contain'
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#000000' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#000000' : '#748c94', fontSize: 12}}>COMPOST</Text>
          </View>
        ),
      }} />
      <Tab.Screen name="Terra" component={CameraScreen} options={{
        headerShown: true,
        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular',
                      color: 'rgb(32, 133, 40)',
                      fontSize: 30},
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 13}}>
            <Image 
              source={require('../icons8-camera-50.png')}
              resizeMode='contain'
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#000000' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#000000' : '#748c94', fontSize: 12}}>CAMERA</Text>
          </View>
        ),
      }} />
      <Tab.Screen name="Recycle" component={RecycleScreen} options={{
        headerShown: true,
        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular',
                      color: 'rgb(32, 133, 40)',
                      fontSize: 30},
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 13}}>
            <Image 
              source={require('../icons8-recycle-50.png')}
              resizeMode='contain'
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#000000' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#000000' : '#748c94', fontSize: 12}}>RECYCLE</Text>
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
}
};

export default Tabs;

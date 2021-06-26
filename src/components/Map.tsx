import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, LocalTile, Polyline} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';
import {useRef} from 'react';

interface Props {
  markers?: Marker[];
}

const Map = ({markers}: Props) => {

  const [showPolyline, setShowPolyline] = useState(true)

  const {
    hasLocation,
    initialPosition,
    userLocation,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
    routeLines,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  const centerPosition = async () => {
    const location = await getCurrentLocation();
    const {latitude, longitude} = location;

    following.current = true;

    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {

    if(!following.current) return;

    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  if (!hasLocation) {
    return <LoadingScreen />;
  }
  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}
        style={{flex: 1}}>
          {
            showPolyline && (
              <Polyline
                coordinates={routeLines}
                strokeColor="black"
                strokeWidth={3}
              />
            )
          }
          
        {/* <Marker
        image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title='titulo'
          description='descriptiom'
        /> */}
      </MapView>
      <Fab
        onPress={() => centerPosition()}
        iconName="compass-outline"
        style={{position: 'absolute', bottom: 20, right: 20}}
      />
      <Fab
        onPress={() => setShowPolyline(val => !val)}
        iconName="brush-outline"
        style={{position: 'absolute', bottom: 80, right: 20}}
      />
    </>
  );
};

export default Map;

const styles = StyleSheet.create({});

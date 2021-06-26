import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text } from 'react-native'
import Map from '../components/Map';

const MapScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Map/>
        </View>
    )
}

export default MapScreen

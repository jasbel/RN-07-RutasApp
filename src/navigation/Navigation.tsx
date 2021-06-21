import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
      <Stack.Navigator
        initialRouteName='PermissionsScreen'
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      </Stack.Navigator>
    )
}

export default Navigation

import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import {useContext} from 'react';
import {PermissionsContext} from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') return <LoadingScreen />;

  return (
    <Stack.Navigator
      initialRouteName="PermissionsScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
        {permissions.locationStatus==='granted'
          ? <Stack.Screen name="MapScreen" component={MapScreen} />
          : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        }
    </Stack.Navigator>
  );
};

export default Navigation;

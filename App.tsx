import 'react-native-gesture-handler';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Icon
        name='star-outline'
        color='red'
        size={40}
      />
      <Text>hello</Text> */}
      <Navigation />
    </NavigationContainer>
  )
}

export default App

import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { PermissionProvider } from './src/context/PermissionsContext';

const AppState = ({children}: any) => {
  return (
    <PermissionProvider>
      {children}
    </PermissionProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App

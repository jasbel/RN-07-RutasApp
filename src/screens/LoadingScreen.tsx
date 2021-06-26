/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator  size="large" color="#00ff00" />
    </View>
  );
};

export default LoadingScreen;

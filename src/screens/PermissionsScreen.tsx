import React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import stylesApp from '../assets/stylesApp';
import ButtonBlack from '../components/ButtonBlack';
import {PermissionsContext} from '../context/PermissionsContext';

const PermissionsScreen = () => {
  const {permissions, checkLocationPermission, askLocationPermission} =
    useContext(PermissionsContext);

  return (
    <View style={stylesApp.container}>
      <Text style={styles.title}>Para usar esta aplicacion es necesario dar acceso a la Geolocalizacion</Text>

      <ButtonBlack title="permiso" onPress={() => askLocationPermission()} />
      <Text style={{marginTop: 20}}> {JSON.stringify(permissions, null, 3)} </Text>
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  }
});

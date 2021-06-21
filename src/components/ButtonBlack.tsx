import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
  title: string,
  onPress: () => void;
  style?: StyleProp<ViewStyle>
}

const ButtonBlack = ({title, onPress, style = {} }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.buttonBlack, ...style as any}}
    >
      <Text  style={{...styles.buttonText}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonBlack

const styles = StyleSheet.create({
  buttonBlack: {
    height: 50,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
})

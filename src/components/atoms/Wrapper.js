import React from 'react'
import { StyleSheet } from 'react-native'
import platform from '../../helpers/platform'
import LinearGradient from 'react-native-linear-gradient'

function Wrapper({ children, style }){
  return (
    <LinearGradient
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.5}}
      colors={[platform.defaultBackgroundColor, platform.brandLight]}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
})

export default Wrapper

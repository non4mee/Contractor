import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import platform from '../../helpers/platform'

export default function Input({ placeholder, styleInput, disabled, _value, _onChangeText }) {
  const [text, setText] = useState('')
  useEffect(() => {
    setText(_value === 'null' || !_value ? '' : _value)
  }, [_value])
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styleInput, disabled && styles.disabled]}
        value={text}
        onChangeText={newText => {
          setText(newText)
          if (typeof _onChangeText === 'function') {
            _onChangeText(newText)
          }
        }}
        placeholder={placeholder}
        placeholderTextColor='#817b83'
        selectionColor={platform.brandSuccess}
      />
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      width: 332,
      height: 56,
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: platform.brandGrey,
      backgroundColor: platform.brandLight,
      marginHorizontal: 1,
      paddingVertical: 8,
      ...platform.shadow,
      alignSelf: 'center'
    },
    input: {
      fontFamily: platform.fontMedium,
      marginLeft: 25
    },
  })

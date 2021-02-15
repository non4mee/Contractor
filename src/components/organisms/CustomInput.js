import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import platform, { opacify } from '../../helpers/platform'

function CustomInput({
  styleBlock,
  textInput,
  _value,
  _onChangeText,
  subtitle,
  isSmall,
  disabled,
  ...rest
}) {
  const [text, setText] = useState(_value)
  useEffect(() => {
    setText(_value === 'null' || !_value ? '' : _value)
  }, [_value])
  return(
    <View flex={1}>
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View
        style={[
          styles.block,
          styleBlock,
          isSmall && styles.smallBlock,
          disabled && styles.disabled
        ]}
      >
        <TextInput
          value={text}
          editable={!disabled}
          style={[styles.textInput, textInput, isSmall && styles.smallText]}
          autoCorrect={false}
          placeholderTextColor={opacify(platform.brandSuccess, 0.5)}
          selectionColor={platform.brandSuccess}
          underlineColorAndroid='transparent'
          onChangeText={newText => {
            setText(newText)
            if (typeof _onChangeText === 'function') {
              _onChangeText(newText)
            }
          }}
          {...rest}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    width: '99%',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: platform.brandGrey,
    backgroundColor: platform.brandLight,
    marginHorizontal: 1,
    paddingVertical: 8,
    ...platform.shadow
  },
  textInput: {
    flex: 1,
    padding: 0,
    color: platform.brandSuccess,
    fontFamily: platform.fontMedium,
    fontSize: 16,
    paddingHorizontal: 25
  },
  subtitle: {
    color: platform.brandSuccess,
    fontFamily: platform.fontExtraBold,
    paddingBottom: 8,
    paddingTop: 16
  },
  smallBlock: {
    height: 46
  },
  smallText: {
    fontSize: 13
  },
  disabled: {
    backgroundColor: opacify(platform.brandGrey, 0.3)
  }
})

export default CustomInput

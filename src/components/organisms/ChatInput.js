import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native'
import platform from '../../helpers/platform'

import CustomInput from '../organisms/CustomInput'

function ChatInput({ message, setMessage, loading, onPressSend, onPress }){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.block}>
        <CustomInput
          _value={message}
          placeholder={('type a message')}
          styleBlock={styles.input}
          multiline
          _onChangeText={setMessage}
        />
          <TouchableOpacity
            style={styles.btn}
            disabled={loading}
            onPress={onPress}
          >
          </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    flex: 1,
    paddingTop: 390
  },
  input: {
    height: null,
    borderRadius: 28,
    minHeight: 56
  },
  btn: {
    marginLeft: 8,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: platform.brandGreen,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    left: -1
  }
})

export default ChatInput

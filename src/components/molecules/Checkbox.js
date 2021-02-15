import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import platform from '../../helpers/platform'
// import CheckBox from '@react-native-community/checkbox';

function Checkbox({ value, name }) {
  const [isSelected, setSelection] = useState(false);
    return (
      <View style={styles.container}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          />
        <Text styles={styles.text}>{name}</Text>
      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row'
  },
  text: {
    fontFamily: platform.fontExtraBold,
    fontSize: 20,
  }
})

export default Checkbox

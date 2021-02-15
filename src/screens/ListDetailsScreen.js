import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import platform, { opacify } from '../helpers/platform'

import EmptyButton from '../components/molecules/EmptyButton'
import Block from '../components/molecules/Block'

export default function ListDetails({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

})

import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import platform, { opacify } from '../helpers/platform'

import EmptyButton from '../components/molecules/EmptyButton'
import Block from '../components/molecules/Block'
import Checkbox from '../components/molecules/Checkbox'

export default function ResearchScreen({ navigation }) {
  const [isClick, setClick] = useState(false)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <EmptyButton
          sourceIcon={isClick ? require('../img/minus.png') : require('../img/plus.png')}
          text='Refine Search'
          onPress={() => setClick(!isClick)}
        />
      </View>
      {isClick ? (
        <>
          <Text style={styles.text}>Refine Search</Text>
          <Checkbox name='Same day service' />
          <Checkbox name='Available after hours' />
          <Checkbox name='Licensed' />
          <Checkbox name='Blue Card' />
          <Checkbox name='COVID-Safe' />
          <Text style={styles.text}>6 "Plumbers" in Broadbeach QLD 4218</Text>
        </>
      ) : (
        <Text style={styles.text}>6 "Plumbers" in Broadbeach QLD 4218</Text>
      )}
      <View>
        <Block style={styles.greenBlock}/>
        <Block style={styles.greenBlock}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  block: {
    paddingTop: 16,
    marginHorizontal: 16
  },
  headerText: {
    fontFamily: platform.fontExtraBold,
    fontSize: 26,
    marginHorizontal: 16,
    paddingTop: 10,
    marginBottom: 25
  },
  greenBlock: {
    paddingTop: 10
  },
  logo: {
    width: 50,
    height: 50
  },
  text: {
    fontFamily: platform.fontExtraBold,
    fontSize: 24,
    padding: 16
  },

})

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import platform, { opacify } from '../helpers/platform'
import axios from 'axios'

import ListButton from '../components/molecules/ListButton'
import NewsItem from '../components/organisms/NewsItem'

function ListScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const apiURL = 'http://phplaravel-466997-1463969.cloudwaysapps.com/api/articles'
  useEffect(() => {
    getData()
  }, []);
  const getData = () => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setData(json.data.articles))
      .catch((error) => console.error(error))
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsItem
            title={item.name}
            source={{ uri: item.file.url }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: platform.fontExtraBold,
    paddingLeft: 20,
    paddingTop: 16,
    textAlign: 'center'
  },
  border: {
    borderWidth: 1,
    borderColor: platform.brandGrey,
    marginHorizontal: 19,
    marginTop: 15
  },
  block: {
    flexDirection: 'row'
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 35,
    marginTop: 10
  },
  text: {
    fontFamily: platform.fontExtraBold
  },
  subtitle: {
    fontFamily: platform.fontMedium,
    color: platform.brandDark,
    fontSize: 13,
    paddingTop: 5
  },
  textBlock: {
    paddingLeft: 10,
    paddingTop: 10
  },
  fetchBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
})

  export default ListScreen

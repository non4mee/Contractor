import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import platform, { opacify } from '../helpers/platform'
import { connect } from 'react-redux'
import axios from 'axios'

import ChatItem from '../components/organisms/ChatItem'

function NotificationChatScreen({ navigation, user }) {
  const [data, setData] = useState([]);
  const apiURL = 'http://phplaravel-466997-1463969.cloudwaysapps.com/api/contractor/messages/chats'
  const _tokenTest = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTE5NGY5Y2NkMWEwNTY0MjExNDllNDZlM2YzZDdhMWE5NmQ3ZDBkOGNlNDg2NDA5OTU4ZDI1M2FlOTEyNzhhMGYyYzk5ZTA0ZjEzOGI1NTMiLCJpYXQiOjE2MDYxMTQzMjAsIm5iZiI6MTYwNjExNDMyMCwiZXhwIjoxNjM3NjUwMzIwLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.bOCAaGwf31jR7fWgbxV6xiTqklI0c3Wt6dScZR2JmrOjWONPG3O9uLbTXqGGzF2apQqSpGA4HRNa70M59l_bLk7V5jCPxnj3zNNkPPqu2BAHnIlXSNX7fOTlXpVRO4ZR0EyW2VSy2eBGB_zX4cRLFkoy-ivL3j2noY9_A64Vj9hISRtXXo4sijj2sykv_kjsvgzZBvB6nR9ho_4IPRY1PftheYqePxFA-vsagvEXhPxWERJq8YQBiuE25L0dPU-bEbFOnaAV2thg6tAWvclintxgXRxBEOszQylGVfaensTjE85cMB3q68dY7fH0Jx47H-xDRU_Aff-cbmnVM_tdxA7rknlzc9RNx_H2y1-pOf5Smkyhcm6-HsD3HNUsUDQqeZFd1KzEplcQmPzxnAHOw7ouRfeWnPXNNoUZ9XwS8Dz8-X1bvHTnCDuVU653p8sXnQppwne384SFieoLRlckdqIGYrnA1ama2Zx_0lH2CFmKj16inSxyCImMqNzmEmKw_Ndjwj-8SXprawBTGfw8k3XWNNZv-LXToCqe09XOimHCS2UOZXKiSOScMMhjoz-znWFhJgNFxg_q_KubqTo_aO9Oeh-lk0jWdJKvhhNrBkszQ698ILXEM96J_B9Kq2AqSiLk-prLVWKGuHWj8IaqunbhYmqaHMgZ_k31NLNDYQQ'
  useEffect(() => {
    getData()
  }, []);
  const getData = () => {
    axios({
      url: apiURL,
      method: 'get',
      headers: { Authorization: user.token_type + ' ' + _tokenTest }
    })
      .then(res => {
        console.log('res', res)
        setData(res?.data?.data?.chats)
      })
      .catch(err => console.log('err', err))
  }
  console.log('data', data)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.headerText}>Messages</Text>}
        renderItem={({ item }) => (
          <ChatItem
            source={{ uri: item.avatar }}
            title={item.name}
            date={item.text}
            onPress={() => navigation.navigate('Notification')}
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
  headerText: {
    fontFamily: platform.fontExtraBold,
    fontSize: 36,
    paddingLeft: 20,
    paddingTop: 25,
    marginBottom: 15
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

const mapStateToProps = ({ auth }) => {
  console.log('auth', auth)
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps)(NotificationChatScreen)

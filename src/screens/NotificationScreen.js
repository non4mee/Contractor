import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList} from 'react-native';
import { connect } from 'react-redux'

import axios from 'axios'
import platform, { opacify } from '../helpers/platform'

import ChatItem from '../components/organisms/ChatItem'
import CustomInput from '../components/organisms/CustomInput'

function NotificationScreen({ navigation, user }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMessages()
  }, [])
  const getMessages = () => {
    axios({
      url: 'http://phplaravel-466997-1463969.cloudwaysapps.com/api/contractor/messages/chat/1',
      method: 'get',
      headers: { Authorization: user.token_type + ' ' +  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTE5NGY5Y2NkMWEwNTY0MjExNDllNDZlM2YzZDdhMWE5NmQ3ZDBkOGNlNDg2NDA5OTU4ZDI1M2FlOTEyNzhhMGYyYzk5ZTA0ZjEzOGI1NTMiLCJpYXQiOjE2MDYxMTQzMjAsIm5iZiI6MTYwNjExNDMyMCwiZXhwIjoxNjM3NjUwMzIwLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.bOCAaGwf31jR7fWgbxV6xiTqklI0c3Wt6dScZR2JmrOjWONPG3O9uLbTXqGGzF2apQqSpGA4HRNa70M59l_bLk7V5jCPxnj3zNNkPPqu2BAHnIlXSNX7fOTlXpVRO4ZR0EyW2VSy2eBGB_zX4cRLFkoy-ivL3j2noY9_A64Vj9hISRtXXo4sijj2sykv_kjsvgzZBvB6nR9ho_4IPRY1PftheYqePxFA-vsagvEXhPxWERJq8YQBiuE25L0dPU-bEbFOnaAV2thg6tAWvclintxgXRxBEOszQylGVfaensTjE85cMB3q68dY7fH0Jx47H-xDRU_Aff-cbmnVM_tdxA7rknlzc9RNx_H2y1-pOf5Smkyhcm6-HsD3HNUsUDQqeZFd1KzEplcQmPzxnAHOw7ouRfeWnPXNNoUZ9XwS8Dz8-X1bvHTnCDuVU653p8sXnQppwne384SFieoLRlckdqIGYrnA1ama2Zx_0lH2CFmKj16inSxyCImMqNzmEmKw_Ndjwj-8SXprawBTGfw8k3XWNNZv-LXToCqe09XOimHCS2UOZXKiSOScMMhjoz-znWFhJgNFxg_q_KubqTo_aO9Oeh-lk0jWdJKvhhNrBkszQ698ILXEM96J_B9Kq2AqSiLk-prLVWKGuHWj8IaqunbhYmqaHMgZ_k31NLNDYQQ'}
    })
    .then(res => {
      console.log(res)
      setData(res?.data?.data?.messages)
    })
    .catch(err => console.log(err?.response))
  }

  const onPressSend = () => {
    axios({
      url: 'http://phplaravel-466997-1463969.cloudwaysapps.com/api/contractor/messages/create',
      method: 'post',
      data: { data }
    })
    .then(res => {
      console.log(res)
      getMessages(res.data)
    })
    .catch(err => console.log(err?.response))
  }
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => String(item.id)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Text style={styles.headerText}>Joe Bloggs</Text>}
      renderItem={({ item, index }) => {
        <ChatItem
          title={item.name}
          date={item.text}
        />
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontFamily: platform.fontExtraBold,
    fontSize: 36,
    paddingLeft: 20,
    paddingTop: 25,
    marginBottom: 15
  }
})

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps)(NotificationScreen)

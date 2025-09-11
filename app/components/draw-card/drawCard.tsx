import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Header from './header'


const DrawCard = () => {
    const router = useRouter();
  return (
    <View
          className="flex-col border border-black rounded-md bg-[#f1f7fb]"
          style={{ marginBottom: vs(20), paddingHorizontal: s(12), paddingVertical: vs(10)}}
        >
          <Header/>
          <TouchableOpacity
            onPress={() =>
              router.push(
                "/components/mood_entries/mood/mood_checkin/moodCheckInPage"
              )
            }
            className="flex-row justify-center align-center bg-blue-950 rounded-md"
            style={{ width: s(80) }}
          >
            <Text
              style={{ paddingVertical: vs(5), paddingHorizontal: s(5) }}
              className="text-white"
            >
              Draw Card
            </Text>
          </TouchableOpacity>
        </View>
  )
}

export default DrawCard

const styles = StyleSheet.create({})
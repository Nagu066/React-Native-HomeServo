import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessLists from './BusinessLists'

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* Header */}
      <Header/>
      <View style={{padding:20}}>
        {/* Slider */}
        <Slider/>
        {/* Categories */}
        <Categories/>
        <BusinessLists/>
      </View>
      
    </ScrollView>
  )
}
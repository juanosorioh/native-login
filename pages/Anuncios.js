import React from 'react'
import {View, Text, StatusBar, Button} from 'react-native'


const Anuncios = ({navigation}) => {
  return (
    <View>
    <Text> pestaña 2</Text>
    <Button title='ir a pestaña 1'
    onPress={(()=>navigation.navigate('Form'))}/>
    <StatusBar style="auto" />
  </View>
  )
  }
export default Anuncios
import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign , Feather, FontAwesome5   } from '@expo/vector-icons';


const maximize = ()=>{}
const minimize = ()=>{}
const cross = ()=>{}

const Header = () => {
  return (
    <SafeAreaView style={styles.mainHeaderContainer}>
      <View style={styles.headerIcons}>
        <FontAwesome5 name="square" size={20} color="gray" onPress={maximize} style={styles.icon1} />
        <Feather name="circle" size={20} color="gray" onPress={minimize} style={styles.icon2} />
        <AntDesign  name="caretdown" size={20} color="gray" onPress={cross} style={styles.icon3} />
      </View>
    </SafeAreaView>
  )
}

export default Header
const styles= StyleSheet.create({
    mainHeaderContainer:{
        top:40,
        backgroundColor:'#FFB85D',
        height:50,
        elevation:4
    },
    headerIcons:{
      position: 'absolute',
      right:8,
      top:10,
      flexDirection: 'row'
    },
    icon1:{
      margin:4
    },
    icon2:{
      margin:4
    },
    icon3:{
      margin:4
    }
})
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import style from '../style'
import Quadrado from './Quadrado'

export default props => {
   return(
      <>
         <View style={styles.FlexV1}>
            
            <Quadrado />
            <Quadrado cor="#F00" />
            <Quadrado cor="#0f0" />
            <Quadrado cor="#009" />
         </View>
      </>
   )
}

const styles = StyleSheet.create({
    FlexV1: {
         flexGrow: 1,
         width: '100%',   
         alignItems: 'center',
         justifyContent: "center",
         backgroundColor: '#000',
    }
})
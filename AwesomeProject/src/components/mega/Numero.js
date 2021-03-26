import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import style from '../style'
export default ({num}) => {
   return(
      <>
        <View style={styles.Container}>
            <Text style={style.txtG, styles.Num}>
                {num}
            </Text>
        </View>
      </>
   )
}

const styles = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5, 
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Num: {
        color: '#FFF'
    }
})
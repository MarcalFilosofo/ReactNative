import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Estilo from '../style'

export default props => {
   return(
        <View style={styles.Display}>
            <Text style={[Estilo.txtG, styles.DisplayText]}>
                {props.num}
            </Text>
        </View>
   )
}

const styles = StyleSheet.create({
    Display: {
        backgroundColor: '#212121',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }
})
import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import Estilo from '../style'

export default props => {
    return(
        <View style={styles.Botoes}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

const styles = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})
import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './style'

export default props => {
    return(
        <View>
            <Text style={Estilo.txtG}>O resultado é:</Text>
            {props.num % 2 === 0
                ? <Text style={Estilo.txtG}>Par</Text>
                : <Text style={Estilo.txtG}>Impar</Text>
            }
        </View>
    )
}
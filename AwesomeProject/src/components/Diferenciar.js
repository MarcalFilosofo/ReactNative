import React from 'react'
import {View, Text, Platform} from 'react-native'
import Estilo from './style'

export default props => {
    if(Platform.OS === 'android'){
        return(
           <Text>ANDROID</Text>
        )
    } else if(Platform.OS === 'ios'){
        return(
            <Text>ANDROID</Text>
        )
    } else{
        return(
            <Text>{Platform.OS}</Text>
         )
    }
}
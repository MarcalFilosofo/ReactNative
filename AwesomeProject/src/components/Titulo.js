import React from 'react'
import { Text} from 'react-native'
import Estilo from './style'

export default props => (
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>

)
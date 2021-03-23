import React, { useState} from 'react'
import { Text, Button } from 'react-native'
import Estilo from './style'

export default props => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => {setNumero(numero + props.delta)}
    const dec = () => {setNumero(numero - props.delta)}
    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" 
                onPress={inc}
            />
            <Button title="-" 
                onPress={dec}
            />
        </>
    )
}
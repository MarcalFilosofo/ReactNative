import React from 'react'
import { Text } from 'react-native'
import Estilo from './style'

function Comp(){
    return <Text style={Estilo.txtG}>Comp #00</Text>
}

function Comp1(){
    return <Text style={Estilo.txtG}>Comp #01</Text>
}

function Comp2(){
    return <Text style={Estilo.txtG}>Comp #02</Text>
}

export { Comp, Comp1, Comp2 }
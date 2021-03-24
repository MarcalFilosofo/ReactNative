import React from 'react'
import {View, Text} from 'react-native'
import style from './style'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
   return(
        <>
            <If teste={usuario && usuario.nome && usuario.email }>
                <Text style={style.txtG}>Usuario Logado</Text>
                <Text style={style.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
   )
}
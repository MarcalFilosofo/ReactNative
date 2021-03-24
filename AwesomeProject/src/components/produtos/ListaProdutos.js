import React from 'react'
import {View, Text} from 'react-native'
import style from '../style'
import produtos from './produtos'


export default props => {
    function getLista(){
        return produtos.map(p => {
            return(
                <Text key={p.id}>
                    {p.id} {p.nome} tem R$ {p.preco} 
                </Text>
            ) 
        })    
    }

    return(
        <>
            <Text style={style.txtG}>Lista de Produtos</Text>
            {getLista()}
        </>
    )
}
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import Primeiro from './components/Primeiro'
// import { Comp, Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'

export default () => (


    <View style={style.App}>  
        <Pai />
        {/* 
        <Contador inicial={10} delta={2}/>
        <Botao />
        <Titulo principal="Escalobaloba" secundario="Escalabalobinha" />
        <Aleatorio min={1} max={60}></Aleatorio>
        <MinMax min={3} max={20}/>
        <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro />  
        */}
       
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
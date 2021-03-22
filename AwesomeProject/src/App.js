import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import { Comp, Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'


export default () => (
    <View style={style.App}>  
        <MinMax min={3} max={20}/>
        {/* 
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
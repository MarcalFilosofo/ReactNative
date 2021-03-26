import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

// import Primeiro from './components/Primeiro'
// import { Comp, Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import Quadrado from './components/layout/Quadrado'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV2'
import Mega from './components/mega/Mega'

export default () => (


    <SafeAreaView style={style.App}>  
        
        <Mega qtdeNumeros={7} />
        {/* 
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: "Gui", email:"Guigui@gmail.com"}}/>
        <UsuarioLogado usuario={{nome: "Joao"}}/>
        <UsuarioLogado usuario={{email: "carlos@empresa.com"}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <Familia>
            <Membro nome="BIa" sobrenome="Aruuda" />
            <Membro nome="Carlos" sobrenome="Aruuda" />
        </Familia>
        
        <Familia>
            <Membro nome="Joao" sobrenome="Silve" />
            <Membro nome="Julia" sobrenome="Silve" />
            <Membro nome="Gui" sobrenome="Silve" />
        </Familia>
        <ParImpar num={1}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
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
       
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
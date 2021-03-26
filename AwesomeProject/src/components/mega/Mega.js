import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native'
import Estilo from '../style'
import Numero from './Numero'

export default class Mega extends Component{
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros: numeros})
    }

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros + 100
    //     }
    // }

    exibirNumeors = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }

    render(){
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde Numeros"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarNumero}
                ></TextInput>
                <Button 
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeors()}
                </View>
            </>
        )
    }
}
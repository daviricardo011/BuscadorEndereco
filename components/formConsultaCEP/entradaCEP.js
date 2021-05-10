import React, { Component, useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import TextInputMask from 'react-native-text-input-mask';

class ConsultarCEP extends Component {
  state = {
    pegaCEP: ''
  }
  render() {
    return (
      <View>
        <Text style={estilo.titulo}>BUSCADOR DE ENDEREÇO</Text>
        <TextInputMask
          value={this.state.pegaCEP}
          
          onChangeText={(formatted, extracted) => {
            this.setState({pegaCEP:extracted})
            this.props.onLoad(this.state.pegaCEP)
          }}
          style={estilo.input}
          keyboardType="numeric"
          placeholder="Digite o CEP"
          mask={"[00000]-[000]"}
        />

      </View>
    );
  }
};

const estilo = StyleSheet.create({
  titulo: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
    color: "#002542",
  },
  
  input: {
    height: 50,
    margin: 50,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    color: "#000000",
    borderColor: "#009df6"
  },
});

export default ConsultarCEP;
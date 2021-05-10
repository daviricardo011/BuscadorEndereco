import React, { Component } from "react";
import { SafeAreaView, Text, View, Button, Keyboard, StyleSheet, ScrollView} from "react-native";
import ConsultaCEP from "./components/formConsultaCEP/entradaCEP"; 
import axios from "axios";


class App extends Component {

  state = {
    cep: '',
    dados: {
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      ddd: ''
    },
  };

  buscarEndereco = () => {
    this.setState({
      dados: {
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        ddd: ''
      }
    });
    if ((this.state.cep).length == 8) {
      axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
        .then(res => {
          const dados = res.data;
          this.setState({ dados });
          if (this.state.dados.erro) {
            alert("Endereço não encontrado ")
          }
        })
      
      Keyboard.dismiss(); //fecha o teclado quando tecla o button
      
    } else {
      alert('Insira um CEP válido')
    }

  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ConsultaCEP onLoad={(cep) => {this.setState({cep})}}/>
          <View style={estilo.containerBotao}>
            <Button
              onPress={this.buscarEndereco}
              title="Consultar"
            />
          </View>
          <View style={estilo.container}>
            <Text style={estilo.tipo}>CEP: {this.state.dados.cep}</Text>
            <Text style={estilo.tipo}>RUA: {this.state.dados.logradouro}</Text>
            <Text style={estilo.tipo}>BAIRRO: {this.state.dados.bairro}</Text>
            <Text style={estilo.tipo}>CIDADE: {this.state.dados.localidade}</Text>
            <Text style={estilo.tipo}>UF: {this.state.dados.uf}</Text>
            <Text style={estilo.tipo}>IBGE: {this.state.dados.ibge}</Text>
            <Text style={estilo.tipo}>DDD: {this.state.dados.ddd}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
}

const estilo = StyleSheet.create ({
  containerBotao: {
    marginTop: -20,
    marginHorizontal: 80,
  },

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

  container: {
    margin: 20,
    borderWidth: 1,
    borderColor: "#009df6",
    borderRadius: 10,
    
  },

  tipo: {
    margin: 10,
    fontSize: 18,
    color: "#000000",
  },
});

export default App;
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

export function ModalExtrato({ handleClose }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
        <Text style={styles.Titulo}>20/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 001142 .................................... 50 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................. 150 pontos</Text>
          <Text style={styles.Titulo}>16/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 0000170 .................................... 50 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................. 100 pontos</Text>
          <Text style={styles.Titulo}>15/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 0000150 .................................... 50 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................... 50 pontos</Text>
          <Text style={styles.Titulo}>07/09/2024</Text>
          <Text style={styles.Lista}>Débito: Resgate ........................................... -30 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia ....................................... 0 pontos</Text>
          <Text style={styles.Titulo}>01/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 000001 ...................................... 50 pontos</Text>
          <Text style={styles.Lista}>Crédito: NF 000002 ...................................... 50 pontos</Text>
          <Text style={styles.Lista}>Débito: Resgate ........................................... -70 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................... 30 pontos</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function ModalPedido({ handleClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.Titulo}>07/09/2024</Text>
          <Text style={styles.Lista}>Cabo USB</Text>
          <Text style={styles.Lista}>Valor: 70 pontos</Text>
          <Text style={styles.Lista}>Status: Pedido em rota de entrega</Text>
          <Text style={styles.Lista}>Previsão de entrega: 15/09/2024</Text>
          <Text style={styles.Titulo}>01/09/2024</Text>
          <Text style={styles.Lista}>Caderno universitário</Text>
          <Text style={styles.Lista}>Valor: 30 pontos</Text>
          <Text style={styles.Lista}>Status: Entregue</Text>
          <Text style={styles.Lista}>Entrega: 06/09/2024</Text>
        </View>
      </View>
    </View>
  );
}

export function ModalCatalogo({ handleClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.Titulo}>Cabo USB</Text>
          <Text style={styles.Lista}>Valor: 70 pontos</Text>
          <Text style={styles.Titulo}>Caderno universitário</Text>
          <Text style={styles.Lista}>Valor: 30 pontos</Text>
        </View>
      </View>
    </View>
  );
}

export function ModalDuvidas({ handleClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.Titulo}>O que é o programa?</Text>
          <Text style={styles.Lista}>O programa é um canal de relacionamento onde você pode ganhar pontos comprando nossos produtos</Text>
          <Text style={styles.Titulo}>Como faço para ganhar pontos?</Text>
          <Text style={styles.Lista}>Para ganhar pontos, basta você se cadastrar no programa e informar seu CPF no momento da compra.</Text>
          <Text style={styles.Lista}>Mas lembre-se: as compras só serão pontuadas após o cadastro.</Text>
          <Text style={styles.Titulo}>Como posso trocar meus pontos?</Text>
          <Text style={styles.Lista}>Para trocar seus pontos, basta acessar a opção "Catálogo de Prêmios".</Text>
        </View>
      </View>
    </View>
  );
}

export function ModalFaleConosco({ handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.modalView}>
      <TouchableOpacity style={styles.FecharFaleConosco} onPress={handleClose}>
        <Text style={styles.ButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.modalText}>Como podemos te ajudar?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#cedbfa"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#cedbfa"
      />
      <TextInput
        style={styles.mensagem}
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
        placeholderTextColor="#cedbfa"
      />
      <TouchableOpacity style={styles.areaEnviar} onPress={handleClose}>
        <Text style={styles.Enviar}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d3ca5",
    flex: 1,
  },
  Titulo: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    margin: 15,
    color: "#c6d6fa",
  },
  Lista: {
    fontSize: 14,
    margin: 15,
    color: "#c6d6fa",
  },
  Fechar: {
    backgroundColor: "#c6d6fa",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 50,
  },
  ButtonText: {
    color: "#0d3ca5",
  },
  modalView: {
    flex: 1,
    backgroundColor: "#0d3ca5",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    marginBottom: 30,
    textAlign: "center",
    color: "#cedbfa",
    fontSize: 16,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  mensagem: {
    height: 300,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    borderRadius: 15,
  },
  areaEnviar: {
    marginTop: 50,
    height: 25,
    backgroundColor: "#c6d6fa",
    width: "20%",
    borderRadius: 5,
  },
  Enviar: {
    textAlign: "center",
    color: "#0d3ca5",
  },
  FecharFaleConosco: {
    backgroundColor: "#c6d6fa",
    height: 30,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 5,
  },
});

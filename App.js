import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import Titulo from './src/components/title/title';
import { 
  ModalExtrato, 
  ModalPedido, 
  ModalCatalogo, 
  ModalFaleConosco, 
  ModalDuvidas 
} from './src/components/modal';
import coins128 from './assets/coins128.png';

export default function App() {
  const [modalVisible, setModalVisible] = useState({
    extrato: false,
    pedido: false,
    catalogo: false,
    faleConosco: false,
    duvidas: false,
  });

  const openModal = (modal) => {
    setModalVisible({ ...modalVisible, [modal]: true });
  };

  const closeModal = (modal) => {
    setModalVisible({ ...modalVisible, [modal]: false });
  };

  return (
    <View style={styles.container}>
      <Image
        source={coins128}
        style={styles.image} />
     <Titulo />
      <Text style={styles.apresentacao}>Selecione a opção desejada</Text>

      <TouchableOpacity style={styles.button} onPress={() => openModal('extrato')}>
        <Text style={styles.buttontext}>Extrato de pontos</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible.extrato} animationType='fade'>
        <ModalExtrato handleClose={() => closeModal('extrato')} />
      </Modal>

      <TouchableOpacity style={styles.button} onPress={() => openModal('pedido')}>
        <Text style={styles.buttontext}>Meus Pedidos</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible.pedido} animationType='fade'>
        <ModalPedido handleClose={() => closeModal('pedido')} />
      </Modal>    

      <TouchableOpacity style={styles.button} onPress={() => openModal('catalogo')}>
        <Text style={styles.buttontext}>Catálogo de Prêmios</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible.catalogo} animationType='fade'>
        <ModalCatalogo handleClose={() => closeModal('catalogo')} />
      </Modal>

      <TouchableOpacity style={styles.button} onPress={() => openModal('duvidas')}>
        <Text style={styles.buttontext}>Dúvidas frequentes</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible.duvidas} animationType='fade'>
        <ModalDuvidas handleClose={() => closeModal('duvidas')} />
      </Modal>

      <View style={styles.areaFaleConosco}> 
        <TouchableOpacity style={styles.button} onPress={() => openModal('faleConosco')}>
          <Text style={styles.buttontext}>Fale conosco</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible.faleConosco} animationType='fade'>
          <ModalFaleConosco handleClose={() => closeModal('faleConosco')} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061e52',
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 100,
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
  },
  button: {
    backgroundColor: "#0c348f",
    width: "75%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  apresentacao: {
    color: "#cedbfa",
    fontWeight: "bold",
    margin: 15,
    textAlign: "center",
  },
  areaFaleConosco: {
    marginTop: 50,
    width: "75%",
    alignItems: "center"
  },
  buttontext: {
    color: "#cedbfa",
    fontWeight: "bold",
  },
});

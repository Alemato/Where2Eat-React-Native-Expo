import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import MyButton from './MyButton';
import {CardTitle} from './typo';
import CardTextsContainer from './CardTextsContainer';

export default function BookingModal({setModalVisible, modalVisible}) {

  return (
      <View style={styles.centeredView}>
        <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <CardTitle title={'Prenota un tavolo'}></CardTitle>
              <CardTextsContainer>
                <Text style={styles.modalText}>Giorno</Text>
                <Text style={styles.modalText}>Ora</Text>
                <Text style={styles.modalText}>Posti</Text>

                {/*TODO input*/}

                <MyButton text={'PRENOTA AL RISTORNATE'} color={'#0089FF'}
                          setModalVisible={setModalVisible}
                          modalVisible={modalVisible}
                          pressedColor={'#00539C'}
                          styleButton={styles.button}/>
              </CardTextsContainer>

            </View>
          </View>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 350,
    height: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',

  },
});

import {Modal, StyleSheet, Text, View} from 'react-native';
import {CardTitle} from './typo';
import RowContainer from './RowContainer';
import MyButton from './MyButton';
import React from 'react';

export default function BookingCancelModal({
                                             setModalVisible,
                                             modalVisible,
                                             idPrenotazione,
                                             idRistorante,
                                           }) {
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
              <CardTitle title={'Annulla '}></CardTitle>

              <Text style={styles.text}>Vuoi annullare la
                prenotazione?</Text>

              <RowContainer style={styles.buttonsContainer}>
                <MyButton text={'No'}
                          color={'#0089FF'}
                          pressedColor={'#00539C'}
                          styleButton={styles.button}
                          onPress={() => {
                            setModalVisible(!modalVisible, false);
                          }}/>
                <MyButton text={'Si'}
                          color={'#0089FF'}
                          pressedColor={'#00539C'}
                          styleButton={styles.button}
                          onPress={() => {
                            setModalVisible(!modalVisible, true, idPrenotazione,
                                idRistorante);
                          }}/>
              </RowContainer>

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
    width: 300,
    height: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingHorizontal: 10,
    marginTop: 20,
  },
  labelContainer: {
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 14,
  },
  rowData: {
    marginStart: 48,
  },
  rowOra: {
    marginStart: 68,
  },
  rowPosti: {
    marginStart: 85,
  },
  buttonsContainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import MyButton from './MyButton';
import {CardTitle} from './typo';
import CardTextsContainer from './CardTextsContainer';
import InputComponent from './InputComponent';

export default function BookingModal({setModalVisible, modalVisible}) {

  const initialState = '';

  const [data, onChangeData] = React.useState(initialState);
  const [ora, onChangeOra] = React.useState(initialState);
  const [posti, onChangePosti] = React.useState(initialState);

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
                <InputComponent data={data} onChangeData={onChangeData}
                                placeholder={'Scegli la data'}
                                keyboardType={'date'}/>
                <InputComponent data={ora} onChangeData={onChangeOra}
                                placeholder={'Scegli l\'ora'}
                                keyboardType={'text'}/>
                <InputComponent data={posti} onChangeData={onChangePosti}
                                placeholder={'Numero posti'}
                                keyboardType={'numeric'}/>

                <MyButton text={'PRENOTA AL RISTORNATE'} color={'#0089FF'}
                          onPress={() => {
                            setModalVisible(!modalVisible);

                          }}
                          pressedColor={'#00539C'}
                          styleButton={styles.button}
                          disabled={
                            !(data !== '' && data !== ' ' && ora !== '' &&
                                ora !== ' ' && posti !== '' && posti !== ' ')
                          }/>
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
    width: 300,
    height: 380,
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
    marginTop: 20,
  },
});

import React, {useCallback} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import MyButton from './MyButton';
import {CardTitle} from './typo';
import ItemContainer from './ItemContainer';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import RowContainer from './RowContainer';
import {useDispatch, useSelector} from 'react-redux';
import {
  sCreateBookingDate,
  sCreateBookingDay,
  sCreateBookingMonth,
  sCreateBookingSeat,
  sCreateBookingTime,
  sCreateBookingYear,
} from '../selectors';
import SeatInput from './SeatInput';
import {useFocusEffect} from '@react-navigation/native';
import {resetBookingForm} from '../reducers/CreateBookingReducer';

export default function BookingModal({setModalVisible, modalVisible}) {

  const dispatch = useDispatch();
  const date = useSelector(sCreateBookingDate);
  const time = useSelector(sCreateBookingTime);
  const seat = useSelector(sCreateBookingSeat);
  const day = useSelector(sCreateBookingDay);
  const month = useSelector(sCreateBookingMonth);
  const year = useSelector(sCreateBookingYear);

  useFocusEffect(useCallback(function() {
    dispatch(resetBookingForm());
  }, []));

  function checkDate() {
    return !(date != null && date !== '' && time != null &&
        time !== '' && seat != null && seat !== '' &&
        seat !== ' ' && year.length === 4 &&
        new Date(year + '/' + month + '/' + day).setHours(0, 0, 0, 0) >=
        new Date(Date.now()).setHours(0, 0, 0, 0) && seat > 0);
  }

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
              <ItemContainer style={styles.rowData}>
                <RowContainer>
                  <Text style={styles.text}>Data : </Text>
                  <DateInput/>
                </RowContainer>
              </ItemContainer>
              <ItemContainer style={styles.rowOra}>
                <RowContainer>
                  <Text style={styles.text}>Ora : </Text>
                  <TimeInput/>
                </RowContainer>
              </ItemContainer>
              <ItemContainer style={styles.rowPosti}>
                <RowContainer>
                  <Text style={styles.text}>Posti : </Text>
                  <SeatInput/>
                </RowContainer>
              </ItemContainer>

              <MyButton text={'PRENOTA AL RISTORNATE'}
                        color={'#0089FF'}
                        pressedColor={'#00539C'}
                        styleButton={styles.button}
                        onPress={() => {
                          setModalVisible(!modalVisible);

                        }}
                        disabled={
                          checkDate()
                        }/>
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
});

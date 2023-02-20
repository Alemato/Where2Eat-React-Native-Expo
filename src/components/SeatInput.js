import {useDispatch, useSelector} from 'react-redux';
import {setBookingSeats} from '../reducers/CreateBookingReducer';
import {sCreateBookingSeat} from '../selectors';
import {StyleSheet, View} from 'react-native';
import Input from './Input';
import React from 'react';

export default function SeatInput() {
  const dispatch = useDispatch();
  const seat = useSelector(sCreateBookingSeat);

  function handleChangeSeat(value) {
    dispatch(setBookingSeats(value));
  }

  return (
      <View style={styles.container}>
        <View style={styles.columnSeat}>
          <Input data={seat} onChangeData={handleChangeSeat}
                 style={styles.input} rest={{maxLength: 3}}
                 keyboardType={'number-pad'}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 10,
    width: '100%',
    flexDirection: 'row',
  },
  columnSeat: {
    width: '30%',
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: '75%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: '#000000',
    paddingHorizontal: 4,
    marginBottom: 12,
    paddingTop: 10,
  },
  text: {
    paddingTop: 15,
    marginEnd: 7,
    fontSize: 15,
  },
});

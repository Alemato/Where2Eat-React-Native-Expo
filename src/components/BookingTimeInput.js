import {useDispatch, useSelector} from 'react-redux';
import {setPartOfTime} from '../reducers/CreateBookingReducer';
import {sCreateBookingHour, sCreateBookingMinute} from '../selectors';
import {StyleSheet, Text, View} from 'react-native';
import Input from './Input';

export default function BookingTimeInput() {
  const dispatch = useDispatch();
  const hour = useSelector(sCreateBookingHour);
  const minute = useSelector(sCreateBookingMinute);

  function handleChangeHour(value) {
    dispatch(setPartOfTime({part: 'hour', value}));
  }

  function handleChangeMinute(value) {
    dispatch(setPartOfTime({part: 'minute', value}));
  }

  return (
      <View style={styles.container}>
        <View style={styles.columnHour}>
          <Input data={hour} onChangeData={handleChangeHour}
                 style={styles.input} rest={{maxLength: 2}}
                 keyboardType={'number-pad'}/>
        </View>
        <Text style={styles.text}>:</Text>
        <View style={styles.columnMinute}>
          <Input data={minute} onChangeData={handleChangeMinute}
                 style={styles.input} rest={{maxLength: 2}}
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
  columnHour: {
    width: '20%',
    paddingVertical: 1,
  },
  columnMinute: {
    width: '20%',
    paddingVertical: 1,
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

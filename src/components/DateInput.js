import {useDispatch, useSelector} from 'react-redux';
import {setPartOfDate} from '../reducers/CreateBookingReducer';
import {
  sCreateBookingDay,
  sCreateBookingMonth,
  sCreateBookingYear,
} from '../selectors';
import {StyleSheet, Text, View} from 'react-native';
import Input from './Input';

export default function DateInput() {
  const dispatch = useDispatch();
  const day = useSelector(sCreateBookingDay);
  const month = useSelector(sCreateBookingMonth);
  const year = useSelector(sCreateBookingYear);

  function setDay(value) {
    dispatch(setPartOfDate({part: 'day', value}));
  }

  function setMonth(value) {
    dispatch(setPartOfDate({part: 'month', value}));
  }

  function setYear(value) {
    dispatch(setPartOfDate({part: 'year', value}));
  }

  return (
      <View style={styles.container}>
        <View style={styles.columnDay}>
          <Input data={day} onChangeData={setDay}
                 style={styles.input} rest={{maxLength: 2}}
                 keyboardType={'number-pad'}/>
        </View>
        <Text style={styles.text}>/</Text>
        <View style={styles.columnMonth}>
          <Input data={month} onChangeData={setMonth}
                 style={styles.input} rest={{maxLength: 2}}
                 keyboardType={'number-pad'}/>
        </View>
        <Text style={styles.text}>/</Text>
        <View style={styles.columnYear}>
          <Input data={year} onChangeData={setYear}
                 style={styles.input} rest={{maxLength: 4}}
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
  columnDay: {
    width: '16%',
  },
  columnMonth: {
    width: '16%',
  },
  columnYear: {
    width: '26%',
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
    marginEnd: 4,
    fontSize: 15,
  },
});

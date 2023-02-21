import {ScrollView, StyleSheet, Text} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import {Title} from '../components/typo';
import BookingCard from '../components/BookingCard';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getServerBookings} from '../actions/BookingActions';
import {useDispatch, useSelector} from 'react-redux';
import {sFutureBookings, sPastBookings} from '../selectors/BookingSelectors';
import {resetBookings} from '../reducers/BookingsReducer';

export default function BookingPageScreen() {
  const dispatch = useDispatch();
  const prenotazioniFuture = useSelector(sFutureBookings);
  const prenotazioniPassate = useSelector(sPastBookings);

  useFocusEffect(useCallback(function() {
    if ((prenotazioniFuture == null || prenotazioniFuture.length === 0) &&
        (prenotazioniPassate == null || prenotazioniPassate.length === 0)) {
      dispatch(getServerBookings());
    }
    return () => {
      console.log('smonto');
      dispatch(resetBookings());
    };
  }, []));

  return (
      <ItemContainer style={styles.container}>
        <ScrollView style={styles.list}>
          <Title title={'Prossime Prenotazioni'}/>

          {(prenotazioniFuture == null || prenotazioniFuture.length === 0) &&
              <Text style={styles.text}>Nessuna prenotazione futura
                disponibile</Text>}
          {(prenotazioniFuture != null && prenotazioniFuture.length > 0) &&
              prenotazioniFuture.map((item, index) => {
                return <BookingCard
                    prenotazione={item}
                    key={index}/>;
              })}
          <Title title={'Prenotazioni Passate'}/>
          {(prenotazioniPassate == null || prenotazioniPassate.length === 0) &&
              <Text style={styles.text}>Nessuna prenotazione passata
                disponibile</Text>}
          {(prenotazioniPassate != null && prenotazioniPassate.length > 0) &&
              prenotazioniPassate.map((item, index) => {
                return <BookingCard

                    prenotazione={item}
                    key={index}/>;
              })}
        </ScrollView>
      </ItemContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import {InputLabel} from '../components/typo';
import Input from '../components/Input';
import RowContainer from '../components/RowContainer';
import MyButton from '../components/MyButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  sFormRicercaCosa,
  sFormRicercaDove,
  sQueryEffettuata,
  sRisultatiRicerca,
} from '../selectors';
import {
  formRicercaChangeCosa,
  formRicercaChangeDove,
  resetRisultatiRicerca,
} from '../reducers/RistorantiReducer';
import {serverSearch} from '../actions/RistorantiActions';
import RestaurantCard from '../components/RestaurantCard';

export default function RicercaPageScreen() {
  const dispatch = useDispatch();
  const dove = useSelector(sFormRicercaDove);
  const cosa = useSelector(sFormRicercaCosa);
  const queryEffettuata = useSelector(sQueryEffettuata);
  const risultatiDiRicerca = useSelector(sRisultatiRicerca);

  function handleChangeDove(dove) {
    dispatch(formRicercaChangeDove(dove));
  }

  function handleChangeCosa(cosa) {
    dispatch(formRicercaChangeCosa(cosa));
  }

  function handleRicerca() {
    dispatch(resetRisultatiRicerca());
    dispatch(serverSearch());
  }

  return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <RowContainer style={styles.row}>
            <View style={styles.inputBox}>
              <ItemContainer style={styles.labelContainer}>
                <InputLabel text={'Dove'}/>
              </ItemContainer>
              <ItemContainer
                  style={[styles.inputContainer, styles.inputPadding]}>
                <Input placeholder={'Città, Località...'} style={styles.input}
                       onChangeData={handleChangeDove}
                       data={dove}
                       rest={{placeholderTextColor: 'rgb(159,159,159)'}}/>
              </ItemContainer>
            </View>
            <View style={styles.inputBox}>
              <ItemContainer style={styles.labelContainer}>
                <InputLabel text={'Cosa'}/>
              </ItemContainer>
              <ItemContainer style={styles.inputContainer}>
                <Input placeholder={'Nome ristorante...'}
                       style={styles.input}
                       onChangeData={handleChangeCosa}
                       data={cosa}
                       rest={{placeholderTextColor: 'rgb(159,159,159)'}}/>
              </ItemContainer>
            </View>
          </RowContainer>
          <View style={styles.buttonMargin}>
            <MyButton text={'EFFETTA LA RICERCA'}
                      color={'#0089FF'}
                      pressedColor={'#00539C'} styleText={styles.button}
                      disabled={!(true)}
                      onPress={handleRicerca}
            />
          </View>
        </View>
        {!queryEffettuata &&
            <Text style={styles.textCenter}>Riempi la form e clicca su
              cerca</Text>}
        {queryEffettuata && risultatiDiRicerca != null &&
            risultatiDiRicerca.length === 0 &&
            <Text style={styles.textCenter}>Nessun risultato trovato</Text>}

        {queryEffettuata &&
            (risultatiDiRicerca != null && risultatiDiRicerca.length > 0) &&
            <FlatList style={styles.list}
                      data={risultatiDiRicerca}
                      renderItem={({item}) => <RestaurantCard
                          restaurantCard={{
                            ristorante: item,
                          }}/>}
                      keyExtractor={(item) => item.id}
            />}
      </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
      searchContainer: {
        paddingHorizontal: 15,
        paddingTop: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderBottomColor: '#000000',
        borderTopColor: 'rgba(0,0,0,0.15)',
      },
      input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderBottomColor: '#000000',
        fontSize: 18,
        height: 35,
        paddingHorizontal: 5,
        color: 'black',
      },
      inputContainer: {
        paddingHorizontal: 0,
        marginBottom: 12,
      },
      labelContainer: {
        paddingHorizontal: 0,
        marginBottom: 0,
      },
      inputBox: {
        flexDirection: 'column',
        width: '50%',
      },
      row: {
        //flex: 1,
        flexDirection: 'row',
      },
      button: {
        color: 'white',
        padding: 10,
        fontWeight: '800',
        textAlign: 'center',
      },
      buttonMargin: {
        marginBottom: 5,
      },
      inputPadding: {
        paddingEnd: 5,
      },
      textCenter: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
      },
    },
);

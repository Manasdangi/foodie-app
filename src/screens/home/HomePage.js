import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './Style';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';
import Restaurants from '../../components/restaurant/Restaurants';
import {AppContext} from '../../context/AppContext';
import LoadingPage from '../LoadingPage';

export default function HomePage({navigation}) {
  const {state, setLoadingState} = useContext(AppContext);
  const [loading, setLoading] = useState(state.loadingState);

  useEffect(() => {
    setLoading(state.loadingState);
  }, [state.loadingState]);

  useEffect(() => {
    setLoadingState(false);
  }, [state.restaurantsState]);

  return (
    <>
      {loading == true ? (
        <LoadingPage />
      ) : (
        <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
          <Header />
          <SearchBar />
          <Categories navigation={navigation} />
          <Restaurants />
        </ScrollView>
      )}
    </>
  );
}

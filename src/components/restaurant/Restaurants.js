import {ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FilterTab from '../filterTab/FilterTab';
import RestaurantList from './RestaurantList';
import ComponentHeader from '../componentsHeader/ComponentHeader';
import {AppContext} from '../../context/AppContext';

export default function Restaurants({data}) {
  const {state} = useContext(AppContext);
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    const restaurants = state?.restaurantsState?.restaurants ?? [];
    setRestaurantsData(restaurants);
  }, [state?.restaurantsState?.restaurants]);

  return (
    <ScrollView style={{marginTop: 10}}>
      <ComponentHeader title={'ALL Restaurants'} />
      {restaurantsData.length && <RestaurantList data={restaurantsData} />}
    </ScrollView>
  );
}

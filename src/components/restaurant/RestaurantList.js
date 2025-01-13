import {View, Text, Image, StyleSheet, FlatList, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import FilterTab from '../filterTab/FilterTab';
import {AppContext} from '../../context/AppContext';

export default function RestaurantList({data}) {
  const navigation = useNavigation();
  const {state} = useContext(AppContext);
  const [restaurantsData, setRestaurantsData] = useState(data);

  useEffect(() => {
    let method = state?.sortingState?.sortMethod;
    if (method) {
      let restaurantData = [...data];
      if (method === '1') {
        restaurantData.sort(
          (a, b) =>
            b.restaurantDetails.avgPricePerHead -
            a.restaurantDetails.avgPricePerHead,
        );
        restaurantData.map(item => {
          console.log(item.restaurantDetails.avgPricePerHead);
        });
        setRestaurantsData([...restaurantData]);
      } else if (method === '2') {
        restaurantData.sort(
          (a, b) =>
            a.restaurantDetails.avgPricePerHead -
            b.restaurantDetails.avgPricePerHead,
        );
        setRestaurantsData([...restaurantData]);
      } else if (method == '3') {
        restaurantData.sort(
          (a, b) => b.restaurantDetails.rating - a.restaurantDetails.rating,
        );
        setRestaurantsData([...restaurantData]);
      } else if (method == '4') {
        restaurantData.sort(
          (a, b) => a.restaurantDetails.rating - b.restaurantDetails.rating,
        );
        setRestaurantsData([...restaurantData]);
      } else if (method == '5') {
        restaurantData.sort(
          (a, b) =>
            a.restaurantDetails.deliveryTime - b.restaurantDetails.deliveryTime,
        );
        setRestaurantsData([...restaurantData]);
      }
    } else {
      setRestaurantsData(data);
    }
    if (state?.searchState?.searchQuery) {
      let searchQuery = state?.searchState?.searchQuery.toLowerCase();

      let newData = restaurantsData.filter(item => {
        let searchSpace = item?.keywords;
        searchSpace = searchSpace.map(item => {
          return item.toLowerCase();
        });
        for (let i = 0; i < searchSpace.length; i++) {
          console.log('->', searchSpace[i], searchQuery);
          if (searchSpace[i].includes(searchQuery)) {
            return true;
          }
        }
        return false;
      });
      setRestaurantsData([...newData]);
    }
  }, [state?.sortingState?.sortMethod, state?.searchState]);

  const updateRestaurantsData = data => {
    setRestaurantsData(data);
  };

  const RenderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('RestaurantPage', {restaurant: item});
        }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.restaurantDetails.url,
              }}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {item.restaurantDetails.title}
              </Text>
              <Text style={styles.ratingText}>
                {item.restaurantDetails.rating} ⭐
              </Text>
            </View>
            <Text style={styles.offerText}>
              {item.restaurantDetails.currentOffer}
            </Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>
                Delivery Time: {item.restaurantDetails.deliveryTime}
              </Text>
              <Text style={styles.detailText}>
                Distance: {item.restaurantDetails.distance}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <FilterTab
        handleRestaurantsdata={updateRestaurantsData}
        restaurantsData={restaurantsData}
        originalRestaurantsData={data}
      />
      <View style={styles.parentContainer}>
        <FlatList
          data={restaurantsData}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imageContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  descriptionContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingText: {
    fontSize: 16,
    color: '#ffc107',
  },
  offerText: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  detailText: {
    fontSize: 12,
    color: '#888', // Grey color for the text
  },
  listContainer: {
    paddingBottom: 20,
  },
});

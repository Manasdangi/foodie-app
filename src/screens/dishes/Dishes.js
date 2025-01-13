import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRight,
  faSquareMinus,
  faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';
import CartBox from '../../components/cartBox/CartBox';

export default function Dishes() {
  const navigation = useNavigation();
  const {state, addItem, removeItem} = useContext(AppContext);

  const cartProps = {
    style: {position: 'absolute', right: 20, bottom: 35},
  };

  const getCurrentDishCount = (restaurantId, dishId) => {
    let dish = state?.cartState?.addedDishes?.find(
      item => item.restaurantId === restaurantId && item.id === dishId,
    );
    return dish ? dish.cnt : 0;
  };

  const renderDishes = (data, restaurantDetails) => (
    <View style={styles.menuContainer}>
      <View style={styles.dishDescriptionContainer}>
        <Text style={styles.dishText}>{data.dishName}</Text>
        <Text style={styles.priceText}>{data.price}</Text>
      </View>
      <View style={styles.plusIconContainer}>
        <TouchableOpacity
          onPress={() => {
            removeItem(data);
          }}>
          <FontAwesomeIcon icon={faSquareMinus} size={24} color="orange" />
        </TouchableOpacity>
        <View style={styles.countContainer}>
          <Text>{getCurrentDishCount(data.restaurantId, data.id)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            addItem(data, restaurantDetails);
          }}>
          <FontAwesomeIcon icon={faSquarePlus} size={24} color="orange" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const RenderItem = ({item}) => (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate('RestaurantPage', {restaurant: item})
        }>
        <View style={styles.descriptionContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.restaurantDetails.title}</Text>
            <Text style={styles.ratingText}>
              {item.restaurantDetails.rating} ⭐
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.offerText}>
              {item.restaurantDetails.deliveryTime}
            </Text>
            <Text style={styles.offerText}>
              {item.restaurantDetails.distance}
            </Text>
          </View>
          <Text style={styles.currentOfferText}>
            {item.restaurantDetails.currentOffer}
          </Text>
        </View>
      </Pressable>
      <FlatList
        horizontal
        data={item.menu.slice(0, 4)}
        renderItem={({item: data}) =>
          renderDishes(data, item.restaurantDetails)
        }
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menuListContainer}
      />
      <Pressable
        onPress={() =>
          navigation.navigate('RestaurantPage', {restaurant: item})
        }>
        <View style={styles.cardFooter}>
          <Text style={styles.cardFooterText}>View all menu</Text>
          <FontAwesomeIcon style={styles.cardFooterIcon} icon={faArrowRight} />
        </View>
      </Pressable>
    </View>
  );

  const [restaurantsData, setRestaurantsData] = useState(
    state.restaurantsState.restaurants,
  );

  useEffect(() => {
    let searchQuery = state?.searchState?.searchQuery;
    if (searchQuery) {
      console.log('abcabc1', searchQuery);

      let newData = restaurantsData.filter(item => {
        return item.restaurantDetails.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
      setRestaurantsData(newData);
    } else if (searchQuery == '') {
      setRestaurantsData(state.restaurantsState.restaurants);
    }
  }, [state?.searchState?.searchQuery]);

  return (
    <View>
      <FlatList
        data={restaurantsData}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
      <CartBox {...cartProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  descriptionContainer: {marginBottom: 8, padding: 10},
  menuContainer: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 5,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
  },
  dishDescriptionContainer: {
    marginHorizontal: 5,
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  plusIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    color: '#ffcc00',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  dishText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  priceText: {
    fontSize: 14,
    color: '#555',
  },
  offerText: {
    fontSize: 14,
    color: '#666',
  },
  currentOfferText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardFooterText: {
    fontSize: 16,
    color: '#007bff',
    marginRight: 5,
  },
  cardFooterIcon: {
    marginTop: 2,
  },
  menuListContainer: {
    paddingVertical: 5,
  },
});

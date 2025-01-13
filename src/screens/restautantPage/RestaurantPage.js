import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/AppContext';
import CartBox from '../../components/cartBox/CartBox';
import PageHeader from '../../components/pageHeader/PageHeader';

export default function RestaurantPage({route}) {
  const {restaurant} = route.params;
  const {state, addItem, removeItem} = useContext(AppContext);
  const [menuData, setMenuData] = useState(restaurant.menu);

  const getCurrentDishCount = dishId => {
    const dish = state?.cartState?.addedDishes?.find(d => d.id === dishId);
    return dish ? dish.cnt : 0;
  };
  const cartProps = {
    style: {position: 'absolute', right: 10, bottom: 10},
  };

  const renderMenuItem = ({item}) => {
    return (
      <View style={styles.dishContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.dishName}>{item.dishName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.dishSummary}>Price: {item.price}</Text>
          <Text style={styles.dishSummary}>
            Type: {item.veg ? 'Veg' : 'Non-Veg'}
          </Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => removeItem(item)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{getCurrentDishCount(item.id)}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addItem(item, restaurant.restaurantDetails)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <PageHeader headerText={restaurant.restaurantDetails.title} />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>
            Rating: {restaurant.restaurantDetails.rating} ⭐
          </Text>
          <Text style={styles.detailText}>
            Delivery Time: {restaurant.restaurantDetails.deliveryTime}
          </Text>
          <Text style={styles.detailText}>
            Distance: {restaurant.restaurantDetails.distance}
          </Text>
          <Text style={styles.detailText}>
            Speciality: {restaurant.speciality}
          </Text>
          <Text style={styles.offerText}>
            Offer: {restaurant.restaurantDetails.currentOffer}
          </Text>
        </View>
        <FlatList
          data={menuData}
          keyExtractor={item => item.id}
          renderItem={renderMenuItem}
        />
      </View>
      <CartBox {...cartProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  detailsContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  offerText: {
    fontSize: 16,
    color: '#d9534f',
    fontWeight: 'bold',
    marginTop: 8,
  },
  dishContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    marginBottom: 10,
    width: '70%',
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  dishSummary: {
    fontSize: 14,
    color: '#666',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 30, // Square button
    height: 30, // Square button
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange color
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  countText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

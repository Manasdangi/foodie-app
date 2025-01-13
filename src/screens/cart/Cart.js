import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {arrayUnion, getFirestore} from '@react-native-firebase/firestore';
import PageHeader from '../../components/pageHeader/PageHeader';
import NoFoodItemPage from '../orders/NoFoodItemPage';
import {AppContext} from '../../context/AppContext';
import {styles} from './Style';

export default function Cart() {
  const {state, clearCart} = useContext(AppContext);
  const navigation = useNavigation();

  const getRestaurantId = () => state.cartState.id;

  const getRestaurantData = () => {
    return state.restaurantsState.restaurants.find(
      element => element.id === getRestaurantId(),
    );
  };

  if (state.cartState.addedDishes.length === 0) {
    return <NoFoodItemPage />;
  }
  const saveItemInStore = async (id, data) => {
    console.log('Saving data:', id, data);
    const db = getFirestore();
    const userDocRef = db.collection('usersInfo').doc(id);
    const userDoc = await userDocRef.get();
    if (userDoc.exists) {
      try {
        await userDocRef.update({cartData: data});
        console.log('Document successfully updated!');
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    } else {
      await userDocRef.set({cartData: data});
    }
  };

  const emptyCart = () => {
    clearCart();
    saveItemInStore(state.userState.user.email, {
      addedDishes: [],
      restaurantInfo: {},
      id: '',
    });
  };

  const totalAmount = () =>
    state.cartState.addedDishes.reduce(
      (total, item) => total + calculatePrice(item),
      0,
    );

  const calculatePrice = item => {
    const price = parseInt(item.price.slice(1)); // Extract and convert price to integer
    return price * item.cnt;
  };

  const renderDish = ({item}) => (
    <View style={styles.dishContainer}>
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text style={styles.dishCount}>Qty: {item.cnt}</Text>
      <Text style={styles.dishPrice}>₹{calculatePrice(item)}</Text>
    </View>
  );

  const upsertDocument = async (docId, data) => {
    if (state?.userState?.user.email) {
      const db = getFirestore();
      const docRef = db.collection('orders').doc(docId);

      try {
        await db
          .collection('usersInfo')
          .doc(state.userState.user.email)
          .set({previousOrders: arrayUnion(data)}, {merge: true});

        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          await docRef.set({items: arrayUnion(data)}, {merge: true});
          console.log('Data added to array successfully');
        } else {
          await docRef.set({items: [data]});
          console.log('New document created successfully');
        }
      } catch (error) {
        console.error('Error in upserting document:', error);
      }
    } else {
      console.log('User not logged in');
    }
  };
  const getETA = async (lat1, lng1, lat2, lng2) => {
    const apiKey = 'AIzaSyDbWKM2PIifwbhx-g-8sWIJ26s7g_qxzrs';
    const origins = `${lat1},${lng1}`;
    const destinations = `${lat2},${lng2}`;
    const mode = 'driving'; // Options: driving, walking, bicycling, transit
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&mode=${mode}&key=${apiKey}`;
    const url2 = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=37.659569%2C-73.933783&origins=40.6655101%2C-73.89188969999998&key=AIzaSyDbWKM2PIifwbhx-g-8sWIJ26s7g_qxzrs`;
    try {
      const response = await fetch(url2);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON response
      if (data.status === 'OK') {
        const duration = data.rows[0].elements[0].duration.text;
        const distance = data.rows[0].elements[0].distance.text;
        navigation.navigate('Checkout', {
          ETA: duration,
        });

        console.log(`Travel Time: ${duration}, Distance: ${distance}`);
      } else {
        navigation.navigate('Checkout', {
          ETA: '30 min',
        });
        console.error('Error from Google API:', data.error_message);
      }
    } catch (error) {
      navigation.navigate('Checkout', {
        ETA: '30 min',
      });
      console.error('Error fetching data:', error);
    }
  };

  const onProceedButtonPress = async () => {
    let currLocation = state.userState.currLocation;
    let currLat = currLocation.lat;
    let currLong = currLocation.long;
    let restaurantLat = state.cartState.restaurantInfo.location.latitude;
    let restaurantLong = state.cartState.restaurantInfo.location.longitude;
    console.log('Current Location:', currLat, currLong);
    console.log('Restaurant Location:', restaurantLat, restaurantLong);
    getETA(currLat, currLong, restaurantLat, restaurantLong);
    const currentTimestamp = new Date().toISOString();
    const data = {
      restaurantName: state.cartState.restaurantInfo.title,
      userEmail: state.userState.user.email,
      userName: state.userState.user.name,
      userId: state.userState.user.email,
      addedDishes: state.cartState.addedDishes,
      id: state.cartState?.id,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    };
    upsertDocument(data.id, data);
  };

  return (
    <View style={styles.container}>
      <PageHeader headerText={state.cartState?.restaurantInfo?.title} />
      <Text style={styles.deliveryTime}>
        Delivery Time: {state.cartState?.restaurantInfo?.deliveryTime}
      </Text>
      <Text style={styles.title}>Your Order</Text>
      <FlatList
        data={state.cartState.addedDishes}
        keyExtractor={item => item.id}
        renderItem={renderDish}
        contentContainerStyle={styles.dishList}
      />
      <TouchableOpacity
        style={styles.addMoreButton}
        onPress={() =>
          navigation.navigate('RestaurantPage', {
            restaurant: getRestaurantData(),
          })
        }>
        <Text style={styles.addMoreButtonText}>Add More Items</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearCartButton} onPress={emptyCart}>
        <Text style={styles.clearCartText}>Clear Cart</Text>
      </TouchableOpacity>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₹{totalAmount().toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={onProceedButtonPress}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

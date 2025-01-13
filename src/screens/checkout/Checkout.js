import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowCircleLeft,
  faCreditCard,
  faMoneyBill,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {styles} from './Style';

export default function Checkout({route}) {
  const {ETA} = route.params;
  const {state} = useContext(AppContext);
  const navigation = useNavigation();

  // Restaurant and delivery details
  const restaurant =
    state.cartState.addedDishes[0]?.restaurantName || 'Restaurant';
  const deliveryTime = state.cartState.deliveryTime || '45 min';

  // Total amount calculation
  const totalAmount = () => {
    return state.cartState.addedDishes.reduce(
      (total, item) => total + calculatePrice(item),
      0,
    );
  };

  // Calculate price for each item
  const calculatePrice = item => {
    let price = parseFloat(item.price.slice(1));
    return price * item.cnt;
  };

  // Generate a single-line comma-separated string of dish names
  const renderDishSummary = () => {
    const dishNames = state.cartState.addedDishes.map(item => item.dishName);
    return dishNames.join(', ');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
        </View>

        {/* Restaurant and delivery info */}
        <View style={styles.restaurantContainer}>
          <Text style={styles.restaurantTitle}>{restaurant}</Text>
          <Text style={styles.deliveryText}>Estimated Delivery: {ETA}</Text>
        </View>

        {/* Order Summary */}
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <Text style={styles.dishSummary}>{renderDishSummary()}</Text>

        {/* Total Amount */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Total: Rs. {totalAmount().toFixed(2)}
          </Text>
        </View>

        {/* Payment Options */}
        <Text style={styles.sectionTitle}>Choose Payment Method</Text>
        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentButton}>
            <FontAwesomeIcon icon={faCreditCard} size={20} color="#fff" />
            <Text style={styles.paymentText}>Credit/Debit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <FontAwesomeIcon icon={faWallet} size={20} color="#fff" />
            <Text style={styles.paymentText}>UPI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <FontAwesomeIcon icon={faMoneyBill} size={20} color="#fff" />
            <Text style={styles.paymentText}>Cash on Delivery</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Sticky Proceed to Payment Button */}
      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.navigate('ThankYouPage')}>
        <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

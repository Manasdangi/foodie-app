import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ThankYouPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.thankYouText}>Thank You!</Text>
      <Text style={styles.subText}>
        Your order has been placed successfully.
      </Text>

      {/* Order Summary */}
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryTitle}>Order Summary</Text>
        {/* Replace the following text with actual order details */}
        <Text style={styles.orderSummaryText}>Order #12345</Text>
        <Text style={styles.orderSummaryText}>Expected Delivery: 45 mins</Text>
      </View>

      {/* Back to Home Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Back')}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  thankYouText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  orderSummaryContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
    width: '100%',
  },
  orderSummaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  orderSummaryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import PageHeader from '../../components/pageHeader/PageHeader';
import {AppContext} from '../../context/AppContext';
import {getFirestore} from '@react-native-firebase/firestore';

const renderOrderItem = ({item}) => {
  // Format the order date from createdAt
  const orderDate = new Date(item.createdAt).toLocaleString(); // Format it to a readable date string

  return (
    <View style={styles.orderCard}>
      {/* Restaurant Name */}
      <Text style={styles.restaurantName}>{item.restaurantName}</Text>

      {/* Ordered Dishes */}
      <View style={styles.dishesContainer}>
        <Text style={styles.dishesTitle}>Ordered Dishes:</Text>
        {item.addedDishes.map((dish, index) => (
          <Text key={index} style={styles.dishName}>
            {dish.dishName} (Quantity: {dish.cnt})
          </Text>
        ))}
      </View>

      {/* Order Date */}
      <Text style={styles.orderDate}>Order Date: {orderDate}</Text>

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userEmail}>Email: {item.userEmail}</Text>
        <Text style={styles.userName}>Name: {item.userName}</Text>
      </View>
    </View>
  );
};

export default function Orders() {
  const [ordersData, setOrdersData] = useState([]);
  const {state} = useContext(AppContext);

  useEffect(() => {
    console.log('Orders Screen');
    getOrdersData();
  }, []);

  const getOrdersData = async () => {
    const snapshot = await getFirestore()
      .collection('usersInfo')
      .doc(state.userState.user.email)
      .get();
    const data = snapshot.data();
    console.log('Data:', data);
    if (data.previousOrders) {
      setOrdersData(data.previousOrders);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader headerText={'Past Orders'} />
      <FlatList
        data={ordersData}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  dishesContainer: {
    marginBottom: 12,
  },
  dishesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  dishName: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  orderDate: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  userInfoContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  userName: {
    fontSize: 14,
    color: '#555',
  },
});

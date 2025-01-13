import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/backButton/BackButton';

export default function NoFoodItemPage() {
  const navigation = useNavigation();
  const backbutonProps = {
    style: {
      marginLeft: 20,
    },
  };
  return (
    <>
      <BackButton {...backbutonProps} />
      <View style={styles.container}>
        <Image
          source={{uri: 'https://example.com/empty-plate.png'}} // Replace with an appropriate image URL or local image
          style={styles.image}
        />
        <Text style={styles.title}>No Food Items Added</Text>
        <Text style={styles.description}>
          It looks like there are no items added at the moment. Please add and
          come to this page
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Back')} // Adjust navigation target if needed
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </>
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

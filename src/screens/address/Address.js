import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {AppContext} from '../../context/AppContext';
import PageHeader from '../../components/pageHeader/PageHeader';
import {
  arrayRemove,
  arrayUnion,
  getFirestore,
} from '@react-native-firebase/firestore';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export default function Address() {
  const navigation = useNavigation();
  const {state} = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);

  const getAddresses = async () => {
    const addresses = [];
    const snapshot = await getFirestore()
      .collection('usersInfo')
      .doc(state.userState.user.email)
      .get();
    const data = snapshot?.data();
    if (data?.savedAdresses) {
      data.savedAdresses.forEach(address => {
        addresses.push(address);
      });
    }
    setAddresses(addresses);
    console.log('Addresses:222', addresses);
    setLoading(false);
  };
  useEffect(() => {
    getAddresses();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getAddresses();
    }, []),
  );

  const handleEdit = address => {
    navigation.navigate('AddAddress', {address, isEdit: true});
  };

  const handleDelete = address => {
    setLoading(true);
    const addressDoc = getFirestore()
      .collection('usersInfo')
      .doc(state.userState.user.email);

    addressDoc
      .update({
        savedAdresses: arrayRemove(address),
      })
      .then(() => {
        console.log('Document successfully removed!');
        setLoading(false);
      })
      .catch(error => {
        console.error('Error removing document: ', error);
      });
  };
  const renderAddressCard = ({item}) => {
    return (
      <View style={styles.addressCard}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.addressLine}>{item.addressLine}</Text>
        <Text style={styles.zipCode}>PIN: {item.zipCode}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleEdit(item)}
            style={styles.editButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDelete(item)}
            style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#ff7700" />
      ) : (
        <>
          <PageHeader headerText={'Saved Addresses'} />
          <FlatList
            data={addresses}
            keyExtractor={item => item.id}
            renderItem={renderAddressCard}
          />
          <View>
            <TouchableOpacity
              style={styles.addAddressButton}
              onPress={() => {
                navigation.navigate('AddAddress');
              }}>
              <Text style={styles.addAddressButtonText}>Add new Address</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
    position: 'absolute',
    left: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  addressCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  addressLine: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  zipCode: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    marginRight: 10,
  },
  deleteButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#bca19f',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  addAddressButton: {
    padding: 12,
    backgroundColor: '#bb8967',
    borderRadius: 6,
  },
  addAddressButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {
  getFirestore,
  FieldValue,
  arrayUnion,
  arrayRemove,
} from '@react-native-firebase/firestore';

export default function AddAddress({navigation, route}) {
  const {address, isEdit} = route.params || {};
  const {state} = useContext(AppContext);
  const [title, setTitle] = useState(address?.title || '');
  const [addressLine, setAddressLine] = useState(address?.addressLine || '');
  const [zipCode, setZipCode] = useState(address?.zipCode || '');

  useEffect(() => {
    if (isEdit && address) {
      setTitle(address.title);
      setAddressLine(address.addressLine);
      setZipCode(address.zipCode);
      console.log(' Address:', address);
    }
  }, [isEdit, address]);

  const handleSave = async () => {
    const addressDoc = getFirestore()
      .collection('usersInfo')
      .doc(state.userState.user.email);

    if (isEdit) {
      addressDoc
        .update({
          savedAdresses: arrayRemove(address),
        })
        .then(() => {
          console.log('Document successfully removed!');
        })
        .catch(error => {
          console.error('Error removing document: ', error);
        });

      addressDoc
        .update({
          savedAdresses: arrayUnion({
            ...address, // Preserve the old timestamp
            title,
            addressLine,
            zipCode,
          }),
        })
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch(error => {
          console.error('Error updating document: ', error);
        });
    } else {
      const newAddress = {
        id: Date.now().toString(),
        title,
        addressLine,
        zipCode,
      };
      await addressDoc.set(
        {savedAdresses: arrayUnion(newAddress)},
        {merge: true},
      );
    }

    navigation.goBack({refresh: true});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
        <Text style={styles.header}>Add New Address</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Address Line"
        value={addressLine}
        onChangeText={setAddressLine}
        style={styles.input}
      />
      <TextInput
        placeholder="ZIP Code"
        value={zipCode}
        onChangeText={setZipCode}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {AppContext} from '../../../context/AppContext';

export default function ModalSection({modalVisible, setModalVisible}) {
  const {state, setSortingMethod} = useContext(AppContext);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    if (state?.sortingState?.sortMethod) {
      setSelectedId(state.sortingState.sortMethod);
    }
  }, [state?.sortingState?.sortMethod]);

  const sortingOptions = [
    {id: '1', text: 'Price: Highest to Lowest'},
    {id: '2', text: 'Price: Lowest to Highest'},
    {id: '3', text: 'Rating: Highest to Lowest'},
    {id: '4', text: 'Rating: Lowest to Highest'},
    {id: '5', text: 'Delivery Time'},
    {id: '6', text: 'Veg'},
    {id: '7', text: 'Non-Veg'},
    {id: '8', text: 'Gourmet'},
  ];

  const handleOptionSelect = id => {
    console.log('id', id);
    if (selectedId === id) {
      setSelectedId('');
      return;
    }
    setSelectedId(id);
  };

  const handleApplyPress = () => {
    setSortingMethod(selectedId);
    setModalVisible(false);
  };

  const renderOption = ({item}) => (
    <View style={styles.optionContainer}>
      <Text style={styles.optionText}>{item.text}</Text>
      <CheckBox
        style={styles.checkbox}
        onClick={() => handleOptionSelect(item.id)}
        isChecked={item.id === selectedId}
      />
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Sort by</Text>
              <FlatList
                data={sortingOptions.slice(0, 5)} // Only first 5 options displayed
                renderItem={renderOption}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.optionsList}
              />
              <View style={styles.applyButtonContainer}>
                <Button
                  title="Apply"
                  color="white"
                  onPress={handleApplyPress}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  optionsList: {
    paddingBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  checkbox: {
    padding: 10,
  },
  applyButtonContainer: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#15191e',
    paddingVertical: 10,
  },
});

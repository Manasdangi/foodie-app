import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useMemo, useContext, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCancel,
  faCaretDown,
  faCross,
  faCrosshairs,
  faRemove,
} from '@fortawesome/free-solid-svg-icons';
import ModalSection from '../componentsHeader/modals/ModalSection';

export default function FilterTab({
  handleRestaurantsdata,
  restaurantsData,
  originalRestaurantsData,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState([]);

  const updateFilterContext = category => {
    if (appliedFilter.includes(category)) {
      setAppliedFilter(appliedFilter.filter(item => item !== category));
      return;
    }
    setAppliedFilter([...appliedFilter, category]);
  };

  useEffect(() => {
    let currRestaurantData = originalRestaurantsData;
    if (appliedFilter.includes('FOUR_STAR')) {
      currRestaurantData = currRestaurantData.filter(
        item => item.restaurantDetails.rating >= 4,
      );
    }
    if (appliedFilter.includes('VEG')) {
      currRestaurantData = currRestaurantData.filter(
        item => item.restaurantDetails.vegetarian,
      );
    }
    if (appliedFilter.includes('GOURMET')) {
      currRestaurantData = currRestaurantData.filter(
        item => item.restaurantDetails.isGourmet,
      );
    }
    if (appliedFilter.includes('NON_VEG')) {
      currRestaurantData = currRestaurantData.filter(
        item => !item.restaurantDetails.vegetarian,
      );
    }
    handleRestaurantsdata(currRestaurantData);
  }, [appliedFilter]);

  const checkFilterIsApplied = (category, appliedFilter) => {
    if (appliedFilter.includes(category)) {
      return true;
    }
    return false;
  };

  const Component = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text>Sort</Text>
          <FontAwesomeIcon icon={faCaretDown} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => updateFilterContext('FOUR_STAR')}>
          <Text>Rating 4.0+</Text>
          {checkFilterIsApplied('FOUR_STAR', appliedFilter) && (
            <FontAwesomeIcon icon={faRemove} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => updateFilterContext('VEG')}>
          <Text>Veg</Text>
          {checkFilterIsApplied('VEG', appliedFilter) && (
            <FontAwesomeIcon icon={faRemove} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => updateFilterContext('NON_VEG')}>
          <Text>Non-Veg</Text>
          {checkFilterIsApplied('NON_VEG', appliedFilter) && (
            <FontAwesomeIcon icon={faRemove} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => updateFilterContext('GOURMET')}>
          <Text>Gourmet</Text>
          {checkFilterIsApplied('GOURMET', appliedFilter) && (
            <FontAwesomeIcon icon={faRemove} />
          )}
        </TouchableOpacity>
      </>
    );
  };

  const Modal = () => {
    return (
      <ModalSection
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <ScrollView horizontal>
      <Component />
      <Modal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterItem: {
    margin: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor: '#dacccc',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

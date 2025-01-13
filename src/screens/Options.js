import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import Restaurants from '../components/restaurant/Restaurants';
import Dishes from './dishes/Dishes';
import {AppContext} from '../context/AppContext';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const OptionsTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      }}>
      <Tab.Screen name="Restaurants" component={Restaurants} />
      <Tab.Screen name="Dishes" component={Dishes} />
    </Tab.Navigator>
  );
};

const Options = ({navigation}) => {
  const {state, setSearchQueryFunc} = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState(
    state?.searchState.searchQuery,
  );

  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    if (state?.restaurantsState?.restaurants) {
      setRestaurantsData(state.restaurantsState.restaurants);
    }
  }, [state?.restaurantsState?.restaurants]);

  useEffect(() => {
    setSearchQueryFunc(searchQuery);
  }, [searchQuery]);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            setSearchQueryFunc('');
            navigation.goBack();
          }}
          style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{flex: 1}}
          />
          <Pressable
            onPress={() => {
              setSearchQuery('');
            }}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              color="grey"
              style={styles.crossButton}
            />
          </Pressable>
        </View>
      </View>
      {/* Tab Navigation */}
      <OptionsTabs data1={restaurantsData} />
    </View>
  );
};

const OptionsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3,
  },
});

export default OptionsStack;

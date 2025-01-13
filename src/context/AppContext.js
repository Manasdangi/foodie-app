// AppContext.js
import React, {createContext, useEffect, useReducer} from 'react';
import {usersReducer, initialUserState} from './reducers.js/usersReducer';
import {cartReducer, initialCartState} from './reducers.js/cartReducer';
import {
  addressesReducer,
  initialAddressState,
} from './reducers.js/addressesReducer';
import {
  initialRestaurantsState,
  restaurantsReducer,
} from './reducers.js/restaurantsReducer';
import {
  initialCategoriesState,
  categoriesReducer,
} from './reducers.js/categoriesReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from '@react-native-firebase/firestore';
import {restaurantData} from '../components/data/RestaurantData';
import {categoriesData} from '../components/data/CategoriesData';
import {sortingReducer} from './reducers.js/sortingReducer';

export const AppContext = createContext();

const initialState = {
  userState: initialUserState,
  addressState: initialAddressState,
  cartState: initialCartState,
  sortingState: null,
  restaurantsState: initialRestaurantsState,
  loadingState: true,
  searchState: '',
  categoriesReducer: initialCategoriesState,
};

export const loadingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

const mainReducer = (
  {
    userState,
    addressState,
    cartState,
    sortingState,
    restaurantsState,
    loadingState,
    searchState,
    categoriesState,
  },
  action,
) => ({
  userState: usersReducer(userState, action),
  addressState: addressesReducer(addressState, action),
  cartState: cartReducer(cartState, action),
  sortingState: sortingReducer(sortingState, action),
  restaurantsState: restaurantsReducer(restaurantsState, action),
  loadingState: loadingReducer(loadingState, action),
  searchState: searchReducer(searchState, action),
  categoriesState: categoriesReducer(categoriesState, action),
});

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const saveMoreRestaurantsData = async () => {
    const db = getFirestore();
    try {
      await db
        .collection('restaurants')
        .doc('allRestaurantsData')
        .set({dishedDataFromAllRestaurants: restaurantData}, {merge: true});
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  const saveMoreCategoriesData = async () => {
    const db = getFirestore();
    try {
      await db
        .collection('categories')
        .doc('allCategoriesData')
        .set({categoriesData: categoriesData}, {merge: true});
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  const setRestaurantsData = async () => {
    try {
      const db = getFirestore();
      const data = await db
        .collection('restaurants')
        .doc('allRestaurantsData')
        .get();
      if (!data.exists) {
        console.log('No data found in the restaurants document.');
        return null;
      }
      const allDocs = {id: data.id, ...data.data()};
      const firstData = allDocs?.dishedDataFromAllRestaurants;
      dispatch({type: 'SET_RESTAURANTS', payload: firstData});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const setCategoriesData = async () => {
    const db = getFirestore();
    try {
      const data = await db
        .collection('categories')
        .doc('allCategoriesData')
        .get();

      const allDocs = {id: data.id, ...data.data()};
      const firstData = allDocs?.categoriesData;
      dispatch({type: 'SET_CATEGORIES', payload: firstData});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const checkCartStatus = async email => {
    try {
      const db = getFirestore();
      const userDocRef = db.collection('usersInfo').doc(email);
      const userDoc = await userDocRef.get();
      if (userDoc.exists) {
        const data = userDoc.data();
        if (data.cartData) {
          dispatch({type: 'SET_CART', payload: data.cartData});
        }
      }
    } catch (error) {
      console.error('Error checking cart status:', error);
    }
  };

  const checkLoginStatus = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      login(JSON.parse(storedUser));
      console.log('User:', JSON.parse(storedUser).email);
      checkCartStatus(JSON.parse(storedUser).email);
    }
  };

  const login = async user => {
    dispatch({type: 'LOGIN', payload: user});
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    dispatch({type: 'LOGOUT'});
  };

  const updateProfile = updatedData =>
    dispatch({type: 'UPDATE_PROFILE', payload: updatedData});

  const deleteProfile = () => dispatch({type: 'DELETE_PROFILE'});

  const addAddress = address =>
    dispatch({type: 'ADD_ADDRESS', payload: address});

  const updateAddress = address =>
    dispatch({type: 'UPDATE_ADDRESS', payload: address});

  const removeAddress = address =>
    dispatch({type: 'REMOVE_ADDRESS', payload: address});

  const addItem = (item, details) =>
    dispatch({type: 'INCREMENT_COUNT', payload: {item, details}});

  const removeItem = item => dispatch({type: 'DECREMENT_COUNT', payload: item});

  const clearCart = () => dispatch({type: 'CLEAR_CART'});

  const setSortingMethod = method =>
    dispatch({type: 'SET_SORT_METHOD', payload: method});

  const setLoadingState = flag =>
    dispatch({type: 'SET_LOADING', payload: flag});

  const setUserId = id => dispatch({type: 'SET_USER_ID', payload: id});

  const updateRestaurantsData = data => {
    dispatch({type: 'SET_RESTAURANTS', payload: data});
  };

  const setSearchQueryFunc = query => {
    dispatch({type: 'SET_SEARCH_QUERY', payload: query});
  };

  const setCurrLocation = location => {
    dispatch({type: 'SET_CURRENT_LOCATION', payload: location});
  };

  useEffect(() => {
    checkLoginStatus();
    setRestaurantsData();
    setCategoriesData();
    // saveMoreRestaurantsData();
    // saveMoreCategoriesData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        login,
        logout,
        updateProfile,
        deleteProfile,
        addAddress,
        updateAddress,
        removeAddress,
        addItem,
        removeItem,
        clearCart,
        setSortingMethod,
        setLoadingState,
        setUserId,
        updateRestaurantsData,
        setSearchQueryFunc,
        setCurrLocation,
      }}>
      {children}
    </AppContext.Provider>
  );
};

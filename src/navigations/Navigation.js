import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faCog} from '@fortawesome/free-solid-svg-icons';
import ProfileStack from '../screens/profile/ProfileStack';
import HomePageStack from '../screens/home/HomePageStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {AppContext} from '../context/AppContext';
import SignUp from '../screens/SignUp/SignUp';
import {AppState, Platform, Alert} from 'react-native';
import {getFirestore} from '@react-native-firebase/firestore';
const Tab = createBottomTabNavigator();

const saveItemInStore = async (id, data) => {
  console.log('Saving data:', id, data);
  const db = getFirestore();
  const userDocRef = db.collection('usersInfo').doc(id);
  const userDoc = await userDocRef.get();
  if (userDoc.exists) {
    try {
      await userDocRef.update({cartData: data});
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  } else {
    await userDocRef.set({cartData: data});
  }
};

export default function Navigation() {
  const {state} = useContext(AppContext);
  useEffect(() => {
    const obj = state.cartState;
    if (obj && obj.addedDishes && obj.addedDishes.length > 0) {
      saveItemInStore(state.userState.user.email, obj);
    }
  }, [state.cartState]);

  if (!state.userState.isAuthenticated) {
    return <SignUp />;
  }

  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    return routeName === 'Options' ? {display: 'none'} : {};
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => {
      const icon = route.name === 'Home' ? faHome : faCog;
      return <FontAwesomeIcon icon={icon} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'orange',
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    tabBarStyle: getTabBarVisibility(route),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomePageStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

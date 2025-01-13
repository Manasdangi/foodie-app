// ProfileStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Help from '../help/Help';
import HomePage from './HomePage';
import Options from '../Options';
import RestaurantPage from '../restautantPage/RestaurantPage';
import Cart from '../cart/Cart';
import Checkout from '../checkout/Checkout';
import ThankYouPage from '../checkout/ThankYouPage';
import OptionsStack from '../Options';

const Stack = createStackNavigator();
const HomePageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Back"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Options"
        component={OptionsStack}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <Stack.Screen
        name="RestaurantPage"
        component={RestaurantPage}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <Stack.Screen
        name="ThankYouPage"
        component={ThankYouPage}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
    </Stack.Navigator>
  );
};

export default HomePageStack;

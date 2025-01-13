// ProfileStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile'; // Import your Profile screen
import Settings from '../settings/Settings'; // Import your Settings screen
import Help from '../help/Help';
import Address from '../address/Address';
import Orders from '../orders/Orders';
import AddAddress from '../address/AddAddress';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Back"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false, title: 'Settings'}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

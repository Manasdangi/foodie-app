import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBowlRice} from '@fortawesome/free-solid-svg-icons';
import {styles} from './Style';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';

export default function CartBox(props) {
  const {style, ...res} = props;
  const navigation = useNavigation();
  const {state} = useContext(AppContext);
  const [cartItemCnt, setCartItemCnt] = useState(
    state.cartState.addedDishes.length,
  );

  useEffect(() => {
    setCartItemCnt(state.cartState.addedDishes.length);
  }, [state.cartState.addedDishes]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Cart');
      }}
      style={[styles.cartIcon, style]}>
      <FontAwesomeIcon icon={faBowlRice} color="white" size={30} />
      <View>
        <Text style={styles.cartCountText}>{cartItemCnt}</Text>
      </View>
    </TouchableOpacity>
  );
}

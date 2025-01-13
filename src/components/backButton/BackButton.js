import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

export default function BackButton(props) {
  const {style} = props;
  const navigation = useNavigation();

  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size={22} />
      </TouchableOpacity>
    </View>
  );
}

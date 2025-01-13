import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Pressable, TouchableOpacity, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {styles} from './Style';
import CartBox from '../cartBox/CartBox';
import Geolocation from '@react-native-community/geolocation';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {AppContext} from '../../context/AppContext';

export default function Header() {
  const cartProps = {
    style: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
  };
  const [address, setAddress] = useState('1st Floor, House no 3995');
  const {setCurrLocation} = useContext(AppContext);
  const getOneTimeLocation = () => {
    console.log('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        console.log('You are Here');
        console.log(position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        console.log('Longitude:', currentLongitude);
        console.log('Latitude:', currentLatitude);
        const apiKey = 'AIzaSyDbWKM2PIifwbhx-g-8sWIJ26s7g_qxzrs';
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentLatitude},${currentLongitude}&key=${apiKey}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            Alert.alert('Location', data.plus_code.compound_code);
            setAddress(data.plus_code.compound_code);
            setCurrLocation({
              lat: currentLatitude,
              long: currentLongitude,
              placeName: data.plus_code.compound_code,
            });
          })
          .catch(error => console.error('Error:', error));
      },
      error => {
        console.log(error.message);
        Alert.alert('Error', JSON.stringify(error));
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const fetchLocation = () => {
    getOneTimeLocation();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={fetchLocation}>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{color: '#ba0303', marginRight: 10}}
          size={30}
        />
      </TouchableOpacity>
      <View>
        <Pressable>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headerTitle}>Address</Text>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{marginTop: 4, marginLeft: 5}}
            />
          </View>
        </Pressable>
        <Text style={styles.headerSubTitle}>{address}</Text>
      </View>
      <CartBox {...cartProps} />
    </View>
  );
}

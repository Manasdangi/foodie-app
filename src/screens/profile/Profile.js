import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHistory,
  faMapLocation,
  faQuestionCircle,
  faSignOut,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import {AppContext} from '../../context/AppContext';

export default function Profile() {
  const {state, logout} = useContext(AppContext);
  const [userDetails, setUserDetails] = useState(state.userState);

  useEffect(() => {
    if (state.userState.user) {
      setUserDetails(state.userState);
    }
  }, [state.userState.user]);

  const userName = userDetails.isAuthenticated
    ? userDetails.user.name
    : 'Login';
  const userEmail = userDetails.isAuthenticated ? userDetails.user.email : '';
  const navigation = useNavigation();

  const logoutComponent = async () => {
    try {
      await auth().signOut();
      logout();
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilQYfWqyoZ-o5jtuBuHYJh2Dj43Gh0i5NUt3z8RO69cUw_eXgfSuTivmGl72Dn0gnehM&usqp=CAU',
          }} // Placeholder for user image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            navigation.navigate('Address');
          }}>
          <FontAwesomeIcon icon={faMapLocation} size={24} color="#FFA500" />
          <Text style={styles.optionText}>Address</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            navigation.navigate('Orders');
          }}>
          <FontAwesomeIcon icon={faHistory} size={24} color="#FFA500" />
          <Text style={styles.optionText}>Your Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            navigation.navigate('Help');
          }}>
          <FontAwesomeIcon icon={faQuestionCircle} size={24} color="#FFA500" />
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Settings')}>
          <FontAwesomeIcon icon={faToolbox} size={24} color="#FFA500" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={logoutComponent}>
          <FontAwesomeIcon icon={faSignOut} size={24} color="#FFA500" />
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2', // Lighter background for better contrast
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#FFA500', // Orange border for the card
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFA500', // Border around the profile image
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFA500', // Orange border for options
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10, // Space between icon and text
  },
});

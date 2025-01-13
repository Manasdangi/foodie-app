import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackButton from '../../components/backButton/BackButton';

const Settings = () => {
  return (
    <View style={{margin: 10}}>
      <BackButton />
      <View style={styles.container}>
        <Text style={styles.title}>Settings Page</Text>
        <View>
          <Text>Edit user info</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Settings;

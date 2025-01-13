import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../backButton/BackButton';

export default function PageHeader({headerText}) {
  return (
    <View style={styles.header}>
      <BackButton />
      <Text style={styles.title}>{headerText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'static',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
});

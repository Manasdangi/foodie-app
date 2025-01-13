import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function ComponentHeader({title}) {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.line} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6c6868',
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#968f8f',
  },
});

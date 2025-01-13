import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ApiCalls() {
  const controller = new AbortController();
  const signal = controller.signal;
  fetch('https://api.example.com/data', {
    method: 'GET',
    body: JSON.stringify({name: 'Manas'}),
    headers: {
      'Content-Type': 'application/json',
    },
    signal,
  })
    .then(response => response.json())
    .catch(error => console.error(error))
    .finally(() => console.log('finally'));
  return (
    <View>
      <Text>ApiCalls</Text>
      <TouchableOpacity onPress={() => controller.abort()}>
        Cancel
      </TouchableOpacity>
    </View>
  );
}

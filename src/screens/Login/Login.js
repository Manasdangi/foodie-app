import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Alert,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {styles} from './Style';
import Input from '../../components/inputField/Input';
import auth from '@react-native-firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginTestFn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User signed in successfully');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        Alert.alert(errorParser(error.message));
      });
  };

  const errorParser = text => {
    return text.split(']')[1];
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Login </Text>
        <View style={styles.inputContainer}>
          <Input
            value={email}
            icon={faEnvelope}
            placeholder={'Enter you email'}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Input
            value={password}
            icon={faLock}
            placeholder={'Password'}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={loginTestFn}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.signUpText1}>Dont have an account? </Text>
        <Text style={styles.signUpText2}>Sign up</Text>
      </View>
    </View>
  );
}

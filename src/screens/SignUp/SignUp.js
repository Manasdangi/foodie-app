import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {styles} from './Style';
import Input from '../../components/inputField/Input';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppContext} from '../../context/AppContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {login, setUserId} = useContext(AppContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '520878191344-lgvnq4dqlreggfbfc9gr209jthahfitv.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    console.log('Google Sign In');
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    console.log('Google Sign In 2');
    GoogleSignin.signIn()
      .then(res => {
        console.log('Google Sign In', res);
        login({
          name: res.data.user.name,
          email: res.data.user.email,
        });
        const googleCredential = auth.GoogleAuthProvider.credential(
          res.data.idToken,
        );
        setUserId(res.data.user.email);
        return auth().signInWithCredential(googleCredential);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const sendSignInLinkToEmail = async () => {
    const actionCodeSettings = {
      url: 'https://rfc1034identifier.page.link/verifyEmail',
      handleCodeInApp: true,
      iOS: {
        bundleId: 'org.reactjs.native.example.app',
      },
    };

    try {
      await auth().sendSignInLinkToEmail(email, actionCodeSettings);
      console.log('Email link sent!');
    } catch (error) {
      console.error('Error sending email link: ', error);
    }
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.childContainer1}>
        <Image
          style={styles.image}
          source={require('../../assets/images/signUpPageImage.jpeg')}
        />
      </View>
      <View style={styles.childContainer2}>
        <Text style={styles.header}>Log in or Sign Up</Text>
        <View style={styles.inputContainer}>
          <Input
            value={name}
            icon={faUser}
            placeholder={'Enter you name'}
            onChangeText={text => {
              setName(text);
            }}
          />
          <Input
            value={email}
            icon={faEnvelope}
            placeholder={'Enter you email'}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={sendSignInLinkToEmail}>
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>
        <Text style={styles.OrDivider}>Or</Text>
        <TouchableOpacity style={styles.button} onPress={onGoogleButtonPress}>
          <Text style={styles.buttonText}>Sign in with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ComponentHeader from '../componentsHeader/ComponentHeader';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';
import {styles} from './Style';

export default function Categories() {
  const navigation = useNavigation();
  const {state} = useContext(AppContext);
  const [imagesData, setImagesData] = useState([]);
  const {setSearchQueryFunc} = useContext(AppContext);

  useEffect(() => {
    setImagesData(state?.categoriesState?.categories);
  }, [state?.categoriesState]);
  const renderItem = item => {
    return (
      <Pressable onPress={() => {}}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              setSearchQueryFunc(item.title1);
              navigation.navigate('Options');
            }}>
            <Image style={styles.image} source={{uri: item.imageUrl1}} />
            <Text style={styles.text}>{item.title1}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSearchQueryFunc(item.title2);
            navigation.navigate('Options');
          }}>
          <View style={styles.box}>
            <Image style={styles.image} source={{uri: item.imageUrl2}} />
            <Text style={styles.text}>{item.title2}</Text>
          </View>
        </TouchableOpacity>
      </Pressable>
    );
  };
  return (
    <View>
      <ComponentHeader title={"What's on your mind?"} />
      <View style={styles.imageContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={imagesData}
          horizontal
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
}

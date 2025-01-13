import React, {useRef, useEffect} from 'react';
import {Animated, Image, View, StyleSheet, Dimensions} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');

const SlidingImage = () => {
  const images = [
    {uri: 'https://tinyurl.com/5n87dddz'},
    {uri: 'https://tinyurl.com/5a9kfm4v'},
    {uri: 'https://tinyurl.com/55hb9dxn'},
  ];
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  let currentIndex = useRef(0).current;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex += 1;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.uri}} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: SCREEN_WIDTH * 0.9,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal: SCREEN_WIDTH * 0.05,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SlidingImage;

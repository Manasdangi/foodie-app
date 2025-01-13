import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {faCircle, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
export default function SearchBar() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationValue = useRef(new Animated.Value(0)).current;
  const [searchQuery, setSearchQuery] = useState('');
  const placeholders = [
    'Search...',
    'Type something...',
    'What are you looking for?',
    'Find your favourite food...',
    'Explore here...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current index to show the next placeholder
      setCurrentIndex(prevIndex => (prevIndex + 1) % placeholders.length);
    }, 1500); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('Search query:', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      animationValue.setValue(0);
    });
  }, [currentIndex]);

  // Define the animation values
  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20], // Slide up
  });

  // Define the animation values
  const opacity = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0], // Fade out
  });

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faSearch} size={20} style={styles.icon} />
      <TextInput
        style={styles.searchInput}
        onChangeText={setSearchQuery}
        onFocus={() => {
          navigation.navigate('Options');
        }}
      />
      <Animated.Text
        style={[
          styles.placeholder,
          {
            transform: [{translateY: translateY}],
            opacity: opacity,
          },
        ]}>
        {placeholders[currentIndex]}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: '#eee2e2',
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
    fontWeight: '500',
    flex: 1, // Allow the TextInput to take available space
    paddingHorizontal: 10, // Add padding for better user experience
  },
  icon: {
    color: '#ba0303',
  },
  placeholder: {
    position: 'absolute',
    left: 40,
    top: 15,
    fontSize: 16,
    color: '#888',
  },
});

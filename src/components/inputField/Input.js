import {useEffect, useState, useRef} from 'react';
import {
  Animated,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {styles} from './Style';

export default function Input({value, icon, placeholder, onChangeText}) {
  const animatedLabel = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false); // Boolean for input focus

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  return (
    // Wrap the input field in TouchableWithoutFeedback to toggle focus state
    <TouchableWithoutFeedback
      onPress={() => {
        setIsFocused(false); // Tapping outside will unfocus the input
      }}>
      <View style={styles.inputContainerBox}>
        <FontAwesomeIcon
          icon={icon}
          style={{marginRight: 10, color: 'red'}}
          size={25}
        />
        <Animated.Text style={[labelStyle, styles.placeholder]}>
          {placeholder}
        </Animated.Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType="name-phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)} // Focus state true on focus
          onBlur={() => setIsFocused(false)} // Blur state false on blur
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

import {StyleSheet} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: SCREEN_WIDTH * 0.9,
    height: 300,
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

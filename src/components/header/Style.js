import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ff6347',
    alignItems: 'center',
  },
  profileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerSubTitle: {
    fontSize: 13,
  },
  profileIcon: {
    marginTop: 0,
    marginRight: 0,
  },
  cartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: '#ba0303',
    padding: 5,
    borderRadius: 15,
  },
  iconStyle: {},
  cartCount: {},
  cartCountText: {
    color: 'yellow',
    fontSize: 18,
    marginTop: -3,
    fontWeight: '900',
  },
});

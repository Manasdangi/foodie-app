import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  profileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  header: {
    padding: 20,
    backgroundColor: '#ff6347',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderColor: '#edececa0',
    borderWidth: 1.5,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    marging: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },
  categoriesContainer: {
    paddingLeft: 20,
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  bannerContainer: {
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  restaurantList: {
    paddingHorizontal: 20,
  },
  restaurantItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  restaurantImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  restaurantInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantRating: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
});

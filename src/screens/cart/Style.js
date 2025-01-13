import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9fb',
  },
  deliveryTime: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 15,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  dishList: {
    paddingVertical: 10,
  },
  dishContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 2,
    color: '#333',
  },
  dishCount: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  dishPrice: {
    fontSize: 16,
    color: '#555',
    flex: 1,
    textAlign: 'right',
  },
  addMoreButton: {
    backgroundColor: '#ff9800',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
  },
  addMoreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  clearCartButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  clearCartText: {
    fontSize: 16,
    color: '#FF6347',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: '#f7f7f7',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

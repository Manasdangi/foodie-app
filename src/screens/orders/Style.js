import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FFA500', // Orange background for the back button
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff', // White text for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  orderBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFA500', // Orange border for the order boxes
  },
  orderDetails: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  orderAmount: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold', // Emphasizing order amount
  },
  paymentMode: {
    fontSize: 14,
    color: '#333',
  },
});

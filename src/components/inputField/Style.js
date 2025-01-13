import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  placeholder: {
    marginLeft: 40,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Quicksand-Regular',
  },
  subHeader: {
    fontSize: 25,
  },
  inputContainer: {
    marginTop: 30,
  },
  inputContainerBox: {
    borderRadius: 4,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 3,
    marginVertical: 20,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    fontWeight: 'bold',
    flex: 1,
  },
  forgot: {
    color: 'red',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red', // Orange background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '50%',
    marginLeft: '50%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // White text color for contrast
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpText1: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signUpText2: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
  input: {
    fontWeight: 'bold',
    flex: 1,
    borderWidth: 2,
    borderColor: 'orange',
  },
  forgot: {
    color: 'orange',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange', // Orange background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '50%',
    marginLeft: '50%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
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

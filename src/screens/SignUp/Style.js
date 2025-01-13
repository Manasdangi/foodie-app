import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  childContainer1: {
    flex: 1,
  },
  childContainer2: {
    flex: 2,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 5,
    letterSpacing: 1,
  },

  placeholder: {
    marginLeft: 40,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  inputContainer: {
    marginTop: 30,
    marginHorizontal: 5,
  },
  input: {
    fontWeight: 'bold',
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
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
  OrDivider: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 5,
    fontSize: 18,
  },
  signUpText2: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'flex-start', 
    marginTop: 10,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    width: 311,
    padding: 2,
    marginTop: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  // languagesBox: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   marginVertical: 10, // Adjusted margin for better spacing
  //   gap: 10,
  // },
  button1: {
    backgroundColor: '#D252A5',
    color: 'white',
    padding: 10,
    width: 300, 
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10,
  },
  button2: {
    backgroundColor: '#6655D0',
    color: 'white',
    padding: 10,
    width: 300, 
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    width: 50, 
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  title: {
    color: '#00000073',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20, 
  },
  centerText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 129, 
    height: 200, 
    resizeMode: 'contain',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 10, 
    margin: 5,
  },
  
  forgotPassword: {
    color: 'blue', 
    textDecorationLine: 'underline',
    marginLeft: 70, 
  },

  checkboxLabel: {
    marginLeft: 8, 
  },
  Iconbutton1: {
    backgroundColor: '#4772CD', 
    borderRadius: 10, 
    padding: 10, 
    margin: 5,
  },
  Iconbutton2: {
    backgroundColor: '#333333', 
    borderRadius: 10, 
    padding: 10, 
    margin: 5,
  },
  Iconbutton3: {
    backgroundColor: '#0068FF', 
    borderRadius: 50,
    padding: 10, 
    margin: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  support: {
    fontSize: 14, 
    marginTop:20,
    marginBottom:20,
  },
  number: {
    fontSize: 16,
    color: '#BC4893',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownList: {
    backgroundColor: '#fafafa',
  },
  Textlanguage: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;


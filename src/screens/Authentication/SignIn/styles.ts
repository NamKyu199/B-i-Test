import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    width:375,
    height:667,
  },
  inputContainer: {
    marginBottom: 15,
    marginVertical: 10,
    borderRadius: 8,
    marginTop:16,
  },
  input: {
    height: 40,
    width: 311,
    padding: 1,
    marginTop: 15,
    backgroundColor:'#FFFFFF',
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
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
    fontFamily: 'Roboto',
    color: 'white',
    padding: 10,
    width: 311, 
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 20,
  },
  button2: {
    backgroundColor: '#6655D0',
    fontFamily: 'Roboto',
    color: 'white',
    padding: 10,
    width: 311, 
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 12,
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  title: {
    color: '#00000073',
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 15, 
  },
  centerText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 129, 
    height: 200, 
    resizeMode: 'contain',
    marginTop: 36,
  },

  PasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 44, 
    margin: 5,
  },
  checkbox:{
    borderRadius:2,
    color:'#FFFFFF',
  },
  
  forgotPassword: {
    width:105,
    height:22,
    fontSize:14,
    fontFamily:'Roboto',
    lineHeight:22,
    alignContent: 'center',
    color: '#6655D0', 
    marginLeft: 70, 
  },

  checkboxLabel: {
    marginLeft: 8,
    width: 110,
    height:22,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 22, 
    color:'#000000D9',
  },
  row:{
      flexDirection: 'row',
    },
  Iconbutton1: {
    backgroundColor: '#4772CD', 
    borderRadius: 20, 
    padding: 1, 
    margin: 1,
    marginRight: 15,
  },
  Iconbutton2: {
    backgroundColor: '#333333', 
    borderRadius: 20, 
    padding: 1, 
    margin: 1,
    marginRight: 15,
  },
  Iconbutton3: {
    backgroundColor: '#0068FF', 
    borderRadius: 20,
    padding: 1, 
    margin: 1,
  },

  support: {
    fontSize: 14, 
    marginTop:12,
    marginBottom:20,
    color:"#333333"
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
  languagesBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default styles;


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#6655D0',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    width:393,
    height:852,
  },
  backgroudcontainer:{
    backgroundColor:'#FFFFFF',
    width:393,
    height:674,
    top:70,
    borderRadius:32,
  },
  inputContainer: {
    marginBottom: 15,
    marginVertical: 10,
    borderRadius: 8,
    marginTop:16,
  },
  input: {
    height: 48,
    width: 332,
    padding: 1,
    marginTop: 10,
    backgroundColor:'#FFFFFF',
    borderRadius: 24,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  Poster: {
    position: 'absolute',  
    top: 18,               
    left: 190,              
    width: 210,
    height: 209,
    zIndex: 999,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languagesBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10, // Adjusted margin for better spacing
    gap: 10,
  },
  button1: {
    backgroundColor: '#EB2F96',
    fontFamily: 'Roboto',
    color: 'white',
    padding: 10,
    width: 332, 
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 30,
  },
  button2: {
    backgroundColor: '#6655D0',
    fontFamily: 'Roboto',
    color: 'white',
    padding: 10,
    width: 332, 
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

  heading_title :{
    width:127,
    height:39,
    marginTop:70,
    fontSize:28,
    color:'#FFFFFF',
    right:80,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },

  heading_title_item:{
    marginTop:0,
    width:162,
    height:44,
    fontSize:16,
    color:'#FFFFFF',
    right:80,
    lineHeight:22,
    justifyContent: 'space-between', 
    opacity: 0.5
  },

  centerText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 190.12, 
    height: 72.33, 
    resizeMode: 'contain',
    marginTop: 32,
  },

  PasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 12, 
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
      top:39,
    },
  Iconbutton1: {
    width:32,
    height:32,
    borderRadius: 20, 
    margin: 1,
    marginRight: 15,
  },
  Iconbutton2: {
    width:32,
    height:32,
    borderRadius: 20, 
    margin: 1,
    marginRight: 15,
  },
  Iconbutton3: {
    width:32,
    height:32,
    borderRadius: 20,
    margin: 1,
  },

  support: {
    fontSize: 14, 
    color:"#333333",
    fontFamily:"Roboto",
  },
  number: {
    fontSize: 18,
    color: '#EB2F96',
    fontWeight: 'bold',
  },

  end:{
    alignItems: 'center',
    justifyContent: 'space-between', 
    top:50,
  },
  // dropdownContainer: {
  //   height: 40,
  //   marginBottom: 20,
  // },
  // dropdown: {
  //   backgroundColor: '#fafafa',
  // },
  // dropdownItem: {
  //   justifyContent: 'flex-start',
  // },
  // dropdownList: {
  //   backgroundColor: '#fafafa',
  // },
  Textlanguage: {
    textAlign: 'center',
    marginTop: 10,
  },
  // languagesBox: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: 20,
  // },
});

export default styles;


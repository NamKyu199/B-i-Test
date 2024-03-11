import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  happycontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
    width: 393,
    height: 852,
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row', // Use a row layout
    alignItems: 'center', // Align items vertically
    justifyContent: 'center',
    marginTop:16,
  },
  
  back: {
    width:24,
    height: 44,
    color: '#000000',
    marginTop: 21,
    marginRight: 8, // Add margin to separate the back button from the text
    right: 100,
  },
  
  header_SignUp: {
    width:100,
    height: 24,
    fontSize: 20,
    fontFamily: 'SF Pro Text',
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 8, // Add margin to separate the text from the back button
  },
  Happyposter: {
    width: 259,
    height: 259,
    marginTop: 100, // Adjust this value to center the image
  },
  heading_title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 230,
    height: 58,
  },
  happy_heading1: {
    width: 152,
    height: 28,
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 28,
    color: '#000000',
    marginTop:16,
    fontWeight: 'bold',

  },
  happy_heading2:{
    width:240,
    height:22,
    fontFamily: 'Roboto',
    fontSize:14,
    lineHeight: 22,
    color:'#00000073',
    marginTop:8,
    
  },
  button_Home: {
    backgroundColor: '#6655D0',
    fontFamily: 'Roboto',
    color: 'white',
    padding: 10,
    width: 361, 
    height: 48,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 40,
    
  },
  
});

export default styles;

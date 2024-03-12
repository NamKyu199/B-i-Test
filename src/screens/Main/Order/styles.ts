import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:393,
    height:1732,
    backgroundColor: '#FFFFFF',
  },

  header: {
    width:393,
    height:84,
    flexDirection: 'row', // Use a row layout
    alignItems: 'center', // Align items vertically
    justifyContent: 'center',
  },

  header_order: {
    width:175,
    height: 24,
    fontSize: 20,
    fontFamily: 'SF Pro Text',
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 5, // Add margin to separate the text from the back button
  },

  back: {
    width:24,
    height: 44,
    color: '#000000',
    marginTop: 21,
    marginRight: 8, // Add margin to separate the back button from the text
    right: 70,
  },

  main:{
    width:393,
    height:1.491,
    
  }
});

export default styles;

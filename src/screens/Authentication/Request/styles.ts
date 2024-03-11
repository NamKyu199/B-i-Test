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
    height:700,
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
    backgroundColor: '#6655D0',
    fontFamily: 'Roboto',
    fontSize:16,
    color: 'white',
    padding: 10,
    width: 332, 
    height: 48,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 50,
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

  logo: {
    width: 191, 
    height: 73, 
    resizeMode: 'contain',
    marginTop: 32,
  },

  row:{
    width:126,
      flexDirection: 'row',
      top:39,
    },
  Iconbutton1: {
    width:32,
    height:32,
    borderRadius: 20, 
    margin: 1,
    marginRight: 15,
    marginTop: 40,
  },
  Iconbutton2: {
    width:32,
    height:32,
    borderRadius: 20, 
    margin: 1,
    marginRight: 15,
    marginTop: 40,

  },
  Iconbutton3: {
    width:32,
    height:32,
    borderRadius: 20,
    margin: 1,
    marginTop: 40,

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
    width:126,
    alignItems: 'center',
    justifyContent: 'space-between', 
    top:50,
  },
  header:{
    width:271,
    height:28,
    fontFamily:'Roboto',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    color: '#6655D0',
    fontWeight: 'bold',
    marginTop:100,
  },
  heading:{
    width:279,
    fontFamily:'Roboto',
    fontSize: 14,
    lineHeight: 20,
    textAlign:'center',
    color: '#333333',
    marginTop:12,
  },

});

export default styles;


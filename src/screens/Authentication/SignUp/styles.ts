import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6655D0',
    fontFamily: 'Roboto',
    width:393,
    height:852,
    
  },
  backgroudcontainer:{
    backgroundColor:'#FFFFFF',
    width:393,
    height:630,
    borderRadius:32,
    marginTop:30,
    alignItems: 'center',
  },

  back:{
    marginTop:24,
    width:24,
    height:24,
    left:16,
  },

  heading_title :{
    marginTop:12,
    fontSize:24,
    color:'#FFFFFF',
    left:16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },

  heading_title_item:{
    marginTop:5,
    width:250,
    height:22,
    fontSize:16,
    color:'#FFFFFF',
    left:16,
    lineHeight:22,
    opacity: 0.5
  },

  Poster:{
    width:134,
    height:134,
    marginTop:12,
    left:270,
    top:12,
    position: 'absolute',
  },

  inputContainer: {
    width:361,
    height:350,
    gap:16,
    marginTop:10,
  },
  input: {
    height: 48,
    width: 361,
    marginTop: 1,
    backgroundColor:'#FFFFFF',
    borderRadius: 10,
    borderWidth: 0.9,   
    borderColor: 'gray', 
    marginVertical: 5,
  },
  inputaddress:{
    height: 70,
    width: 361,
    marginTop: 1,
    backgroundColor:'#FFFFFF',
    borderRadius: 10,
    borderWidth: 0.9,   
    borderColor: 'gray', 
    marginVertical: 5,
  },
  sheetContainer: {
    backgroundColor: '#fff', // Màu nền của bottom sheet
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  otpInput: {
    width: '100%',
    height: 100,
    color: '#000', // Màu chữ của mã OTP
  },
  underlineStyleBase: {
    width: 30, // Chiều rộng của mỗi ô nhập mã
    height: 45, // Chiều cao của mỗi ô nhập mã
    borderWidth: 0, // Độ dày đường kẻ dưới mỗi ô nhập mã
    borderBottomWidth: 2, // Độ dày đường kẻ dưới mỗi ô nhập mã
    color: '#000', // Màu chữ của mỗi ô nhập mã
  },
  underlineStyleHighLighted: {
    borderColor: '#fe7013', // Màu đường kẻ dưới khi ô nhập mã được focus
  },
});

export default styles;


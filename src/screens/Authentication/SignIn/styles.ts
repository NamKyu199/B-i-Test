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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    padding: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Added padding for better spacing
  },
  languagesBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10, // Adjusted margin for better spacing
    gap: 10,
  },
  button1: {
    backgroundColor: '#D252A5',
    color: 'white',
    padding: 10,
    width: 250, // Increased width for better visibility
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 10,
  },
  button2: {
    backgroundColor: '#6655D0',
    color: 'white',
    padding: 10,
    width: 250, // Increased width for better visibility
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    width: 50, // Increased width for better visibility
    borderRadius: 5,
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
    marginTop: 20, // Increased margin for better spacing
  },
  centerText: {
    textAlign: 'center',
    marginVertical: 10, // Adjusted margin for better spacing
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 10, 
  },
  
  forgotPassword: {
    color: 'blue', 
    textDecorationLine: 'underline',
    marginLeft: 8, 
  },

  checkboxLabel: {
    marginLeft: 8, 
  },
  Iconbutton: {
    backgroundColor: '#007BFF', // Màu nền của button
    borderRadius: 10, // Độ cong của góc
    padding: 10, // Khoảng cách từ nội dung đến viền
    marginVertical: 5, // Khoảng cách dọc giữa các button
  },

});

export default styles;


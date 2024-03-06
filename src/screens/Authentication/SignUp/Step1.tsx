import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';

interface Step1Props {
  loginUser: string;
  setLoginUser: React.Dispatch<React.SetStateAction<string>>;
  loginNumber: string;
  setLoginNumber: React.Dispatch<React.SetStateAction<string>>;
  loginEmail: string;
  setLoginEmail: React.Dispatch<React.SetStateAction<string>>;
  loginPassword: string;
  setLoginPassword: React.Dispatch<React.SetStateAction<string>>;
  EnterPassword: string;
  setEnterPassword: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const Step1: React.FC<Step1Props> = ({
  loginUser,
  setLoginUser,
  loginNumber,
  setLoginNumber,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  EnterPassword,
  setEnterPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={loginUser}
        onChangeText={(text) => setLoginUser(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={loginNumber}
        onChangeText={(text) => setLoginNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mail(nếu có)"
        value={loginEmail}
        onChangeText={(text) => setLoginEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        secureTextEntry={!showPassword}
        value={loginPassword}
        onChangeText={(text) => setLoginPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        secureTextEntry={!showPassword}
        value={EnterPassword}
        onChangeText={(text) => setEnterPassword(text)}
      />
    </View>
  );
};

export default Step1;

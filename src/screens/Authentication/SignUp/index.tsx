import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';

import i18n from '../../../translations/i18n';
import styles from './styles';
const PosterLove = require('./../../../assets/img/Poster-ban-tim.png');

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [language, setLanguage] = useState('VI');
  const [loginUser, setLoginUser] = useState('');
  const [loginNumber, setLoginNumber] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [EnterPassword, setEnterPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleNavigateHome = () => {
    navigation.navigate('MainScreen');
  };
  const handleNavigateBack = () => {
    navigation.goBack();
  };


  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TouchableOpacity  style={styles.back} onPress={handleNavigateBack}>
          <SimpleLineIcons name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading_title}>{t('title:SignUp')}</Text>
        <Text style={styles.heading_title_item}>{t('title:title_signup')}</Text>
        <Image source={PosterLove} style={styles.Poster} />
      </View>

      <View style={styles.backgroudcontainer}>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Họ và tên"
            value={loginNumber}
            onChangeText={(text) => setLoginNumber(text)}
            placeholderTextColor="#00000040"
          />
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            value={loginNumber}
            onChangeText={(text) => setLoginNumber(text)}
            left={<TextInput.Icon icon="account-outline" color="#6655D0"/>}
            placeholderTextColor="#00000040"
          />
          <TextInput
            style={styles.input}
            placeholder="Mail"
            value={loginEmail}
            onChangeText={(text) => setLoginEmail(text)}
            left={<TextInput.Icon icon="account-outline" color="#6655D0"/>}
            placeholderTextColor="#00000040"
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry={!showPassword}
            value={loginPassword}
            onChangeText={(text) => setLoginPassword(text)}
            left={<TextInput.Icon icon="lock-outline" color="#6655D0" />}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                color="#9FADC0"
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            placeholderTextColor="#00000040"
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry={!showPassword}
            value={EnterPassword}
            onChangeText={(text) => setEnterPassword(text)}
            left={<TextInput.Icon icon="lock-outline" color="#6655D0" />}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                color="#9FADC0"
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            placeholderTextColor="#00000040"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

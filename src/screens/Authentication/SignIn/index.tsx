import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox'; 
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

import languages from '../../../translations/languages';
import i18n from '../../../translations/i18n';

import styles from './styles';
import MiduBanner from '../../img/Frame 150.png';



const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { t } = useTranslation();
  const [language, setLanguage] = useState('VI');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleChangeLanguage = (newLanguage: string, value: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(value);
  };

  const handleNavigateHome = () => {
    navigation.navigate('MainScreen');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
      <Image source={MiduBanner} style={{ width: 200, height: 200 }} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            value={loginEmail}
            onChangeText={(text) => setLoginEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            value={loginPassword}
            onChangeText={(text) => setLoginPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange = {setChecked}
            />
            <Text style={styles.checkboxLabel}>{t('title:rememberPassword')}</Text>
          </View>
          <TouchableOpacity>
              <Text style={styles.forgotPassword}>{t('title:forgotPassword')}</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.button1} onPress={handleNavigateHome}>
          {t('button:SignIn')}
        </Text>
        <Text style={styles.button2} onPress={handleNavigateHome}>
          {t('button:SignUp')}
        </Text>
      </View>

      <View style={styles.center}>

        <TouchableOpacity style={styles.Iconbutton}>
          <Icon name="facebook" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Iconbutton}>
          <Icon name="tiktok" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Iconbutton}>
          <Icon name="zalo" size={20} color="#fff" />
        </TouchableOpacity>

      </View>

      <View style={styles.languagesBox}>
        <TouchableOpacity
          onPress={() =>
            handleChangeLanguage(
              languages.vi.value.toUpperCase(),
              languages.vi.value,
            )
          }>
          <Text style={styles.button}>{t('button:vietnamese')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleChangeLanguage(
              languages.en.value.toUpperCase(),
              languages.en.value,
            )
          }>
          <Text style={styles.button}>{t('button:english')}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.centerText}>
        {t('common:currentLanguage')}: {language}
      </Text>
    </SafeAreaView>
  );
};

export default SignInScreen;

import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import i18n from '../../../translations/i18n';
import styles from './styles';
const MiduBanner = require('./../../../assets/img/frame-150.png');
const IconZalo = require('./../../../assets/img/Social.png');
const IconTikTok = require('./../../../assets/img/Tiktok.png');
const IconFacebook = require('./../../../assets/img/facebook.png');


const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [language, setLanguage] = useState('VI');
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleNavigateHome = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.languagesBox}>
        <RNPickerSelect
          onValueChange={(value) => handleChangeLanguage(value)}
          items={[
            { label: 'vi', value: 'vi' },
            { label: 'en', value: 'en' },
          ]}
          value={language}
        />
      </View>

       <Text style={styles.centerText}>
        {t('common:currentLanguage')}: {language}
      </Text> */}

      <View style={styles.center}>
        <Image source={MiduBanner} style={styles.logo} />
        <View>
          <Text style={styles.title}>{t('title:title')}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            value={loginUser}
            onChangeText={(text) => setLoginUser(text)}
            left={<TextInput.Icon icon="account-outline" color="#6655D0"/>}
            placeholderTextColor="#00000040"
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            value={loginPassword}
            onChangeText={(text) => setLoginPassword(text)}
            left={<TextInput.Icon icon="lock-outline" color="#6655D0" />}
            placeholderTextColor="#00000040"
          />
        </View>
        <View style={styles.PasswordContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>{t('title:rememberPassword')}</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>{t('title:forgotPassword')}?</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.button1} onPress={handleNavigateHome}>
          {t('button:SignIn')}
        </Text>
        <Text style={styles.button2} onPress={handleNavigateHome}>
          {t('button:SignUp')}
        </Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.Iconbutton1}>
          <Image source={IconFacebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Iconbutton2}>
          <Image source={IconTikTok}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Iconbutton3}>
          <Image source={IconZalo} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.support}>{t('title:support')}<Text style={styles.number}> : 0796.188.883</Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView, Text, TouchableOpacity, View, Image,KeyboardAvoidingView } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';
// import RNPickerSelect from 'react-native-picker-select';

import i18n from '../../../translations/i18n';
import styles from './styles';
const MiduBanner = require('./../../../assets/img/Logo-Midu.png');
const PosterMidu = require('./../../../assets/img/Poster-Midu.png');
const IconZalo = require('./../../../assets/img/Social.png');
const IconTikTok = require('./../../../assets/img/Tiktok.png');
const IconFacebook = require('./../../../assets/img/facebook.png');

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [language, setLanguage] = useState('VI');
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleNavigateSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleNavigateNotification = () => {
    navigation.navigate('NotificationScreen');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={styles.container}>
      <View >
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
        <Text style={styles.heading_title}>{t('title:title')}</Text>
        <Text style={styles.heading_title_item}>{t('title:title_signin')}</Text>
      </View>
      <Image source={PosterMidu} style={[styles.Poster, { zIndex: 999 }]} />
      <View style={styles.backgroudcontainer}>
      <View style={styles.center}>
      <Image source={MiduBanner} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            value={loginUser}
            onChangeText={(text) => setLoginUser(text)}
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
        <Text style={styles.button1} onPress={handleNavigateNotification}>
          {t('button:SignIn')}
        </Text>
        <Text style={styles.button2} onPress={handleNavigateSignUp}>
          {t('button:SignUp')}
        </Text>
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

        <View style={styles.end}>
          <Text style={styles.support}>{t('title:support')} :</Text>
          <Text style={styles.number}> 0796.188.883</Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>

  );
};

export default SignInScreen;

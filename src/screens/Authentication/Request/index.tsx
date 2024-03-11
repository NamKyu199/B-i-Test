import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image,KeyboardAvoidingView } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import i18n from '../../../translations/i18n';
import styles from'./styles';
const MiduBanner = require('./../../../assets/img/Logo-Midu.png');
const PosterMidu = require('./../../../assets/img/Poster-Midu.png');
const IconZalo = require('./../../../assets/img/Social.png');
const IconTikTok = require('./../../../assets/img/Tiktok.png');
const IconFacebook = require('./../../../assets/img/facebook.png');

const NotificationScreen: React.FC = () => {
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
  const handleNavigateSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.heading_title}>{t('title:title_error')}</Text>
        <Text style={styles.heading_title_item}>{t('title:title_signin_error')}</Text>
      </View>
      <Image source={PosterMidu} style={[styles.Poster, { zIndex: 999 }]} />
      <View style={styles.backgroudcontainer}>
      <View style={styles.center}>
      <Image source={MiduBanner} style={styles.logo} />
        <Text style={styles.header}>{t('title:request_sent_successfully')}</Text>
        <Text style={styles.heading}>{t('title:comment')}</Text>

        <Text style={styles.button1} onPress={handleNavigateSignIn}>
          {t('button:Go_back_to_login')}
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

export default NotificationScreen;

import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import i18n from '../../../translations/i18n';
import styles from './styles';
const MiduBanner = require('./../../../assets/img/frame-150.png');

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
            { label: 'Tiếng Việt', value: 'VI' },
            { label: 'English', value: 'EN' },
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
            left={<TextInput.Icon icon="account" />}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            value={loginPassword}
            onChangeText={(text) => setLoginPassword(text)}
            left={<TextInput.Icon icon="lock" />}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setChecked}
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
          <FontAwesomeIcon name="facebook" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Iconbutton2}>
          <FontAwesomeIcon name="tiktok" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Iconbutton3}>
          <FontAwesomeIcon name="zalo" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.support}>{t('title:support')}<Text style={styles.number}> : 0796.188.883</Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image,KeyboardAvoidingView } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import i18n from '../../../translations/i18n';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SuccessfulScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const [language, setLanguage] = useState('VI');

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const Happyposter = require('./../../../assets/img/happy-poster.png');


  const handleNavigateBack = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={styles.happycontainer}>
        <View style={styles.title}>
          <View style={styles.header}>
          <Ionicons  style={styles.back} onPress={handleNavigateBack} name="chevron-back" size={20} color="#fff" />
          <Text style={styles.header_SignUp}>{t('title:SignUp')}</Text>
          </View>
          <Image source={Happyposter} style={styles.Happyposter} />
              <Text style={styles.happy_heading1}>
                  {t('title:header')}
              </Text>
              <Text style={styles.happy_heading2}>
                  {t('title:heading')}
              </Text>
          <Text style={styles.button_Home} onPress={handleNavigateBack}>
             {t('button:Home')} 
          </Text>
        </View>
    </SafeAreaView>
    </KeyboardAvoidingView>

  );
};

export default SuccessfulScreen;

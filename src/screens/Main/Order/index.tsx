import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image,KeyboardAvoidingView } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

import i18n from '../../../translations/i18n';
import styles from'./styles';

const OrderScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [language, setLanguage] = useState('VI');
  
  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleNavigateBack = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Ionicons  style={styles.back} onPress={handleNavigateBack} name="chevron-back" size={20} color="#fff" />
          <Text style={styles.header_order}>{t('title:Create_new_order')}</Text>
          </View>
        <View style={styles.main}>

        </View>
        {/* <View style={styles.hometab}>

        </View> */}
    </SafeAreaView>
    </KeyboardAvoidingView>

  );
};

export default OrderScreen;

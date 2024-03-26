import React, { useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView,TouchableOpacity, TextInput, ScrollView,Image  } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import i18n from '@/translations/i18n';

type SearchBarComponentProps = {};

const RoseScreen: React.FC<SearchBarComponentProps> = () => {
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
      <ScrollView>
        <KeyboardAvoidingView  style={styles.container}>
          <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.information}>
                    <Ionicons style={styles.back} onPress={handleNavigateBack} name="chevron-back" size={20} color="#fff" />
                    <Text style={styles.Rose}>{t('title:Accumulation')}</Text>
                    <Ionicons style={styles.notifications} name="notifications-outline" size={20} color="#fff" />
                </View>
            </View>
            
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  
  export default RoseScreen;
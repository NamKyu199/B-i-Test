import React, { useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView,TouchableOpacity, TextInput, ScrollView,Image  } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import i18n from '@/translations/i18n';

type SearchBarComponentProps = {};

const HomeScreen: React.FC<SearchBarComponentProps> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const { t } = useTranslation();
  
    const [language, setLanguage] = useState('VI');
    const Avata = require('@/assets/img/Avata.png');
    const Profile = require('@/assets/img/Profile.png');
    const Discount = require('@/assets/img/Discount.png');
    const Accumulation = require('@/assets/img/Accumulation.png');
    const Hotline = require('@/assets/img/Hotline.png');
    const Approve = require('@/assets/img/Approve.png');
    const Rose = require('@/assets/img/Rose.png');
    const Loyal_customers = require('@/assets/img/Loyal_customers.png');
    const Link = require('@/assets/img/Link.png');


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
                    <Text style={styles.profile}>{t('title:Profile')}</Text>
                    <Ionicons style={styles.notifications} name="notifications-outline" size={20} color="#fff" />
                    <Ionicons style={styles.settings} name="settings-outline" size={20} color="#fff" />
                </View>
                <View style={styles.account }>
                    <Image source={Avata} style={styles.avata} />
                    <Ionicons style={styles.camera} name="camera" size={28} color="#fff" />
                    <View style={styles.heading}>
                        <Text style={styles.heading1}>{t('title:Drugstore')}</Text>
                        <Text style={styles.heading2}>0987590321</Text>
                    </View>
                    <Text style={styles.button1}>
                        {t('button:Agency')}
                    </Text>
                </View>
            </View>
            
            <View style={styles.main}>
                <View style={styles.Profile_user}>
                    <Image source={Profile} style={styles.User} />
                    <Text style={styles.main_heading1}>{t('title:User')}</Text>
                </View>
                <View style={styles.Profile_user}>
                    <Image source={Discount} style={styles.Discount} />
                    <Text style={styles.main_heading2}>{t('title:Discount_amount')}</Text>
                </View>
                <View style={styles.Profile_Accumulation}>
                    <Image source={Accumulation} style={styles.accumulation} />
                    <Text style={styles.main_heading3}>{t('title:Accumulation')}</Text>
                </View>
                <View style={styles.Profile_user}>
                  <Image source={Approve} style={styles.approve} />
                  <Text style={styles.main_heading4}>{t('title:Approve')}</Text>
                </View>
            </View>
            <View style={styles.body}>
              <View style={styles.body_header}>
                <Text style={styles.Subordinate_account}>{t('title:Subordinate_account')}</Text>
              </View>
              <View style={styles.body_body}>
                <View style={styles.body_rose}>
                  <Image source={Rose} style={styles.Rose} />
                  <Text style={styles.body_heading1}>{t('title:Rose')}</Text>
                </View>
                <View style={styles.body_Loyal}>
                  <Image source={Loyal_customers} style={styles.Loyal_customers} />
                  <Text style={styles.body_heading2}>{t('title:Loyal_customers')}</Text>
                </View>
                <View style={styles.body_Link}>
                  <Image source={Link} style={styles.Link} />
                  <Text style={styles.body_heading3}>{t('title:Links')}</Text>
                </View>
              </View>
            </View>

            <View>
              <Image source={Hotline} style={styles.Hotline} />
            </View>

            <TouchableOpacity onPress={handleNavigateBack} style={styles.Logout}>
                <Text style={styles.Logout_heading}>{t('button:Logout')}</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  
  export default HomeScreen;
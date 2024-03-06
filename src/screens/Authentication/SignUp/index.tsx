import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTranslation } from 'react-i18next';
import StepIndicator from 'react-native-step-indicator';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styles from './styles';

interface SignUpScreenProps {}

const SignUpScreen: React.FC<SignUpScreenProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [loginUser, setLoginUser] = useState<string>('');
  const [loginNumber, setLoginNumber] = useState<string>('');
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [EnterPassword, setEnterPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [Agentname, setAgentname] = useState<string>('');
  const [Partner, setPartner] = useState<string>('');
  const [Source, setSource] = useState<string>('');
  const [Provincial, setProvincial] = useState<string>('');
  const [District, setDistrict] = useState<string>('');
  const [Address, setAddress] = useState<string>('');


  const PosterLove = require('./../../../assets/img/Poster-ban-tim.png');

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const onPageChange = (position: number) => {
    setCurrentStep(position);
  };

  const customStyles  = {
    stepIndicatorSize: 20, 
    currentStepIndicatorSize: 25, 
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };

  const stepLabels = ["Bước 1", "Bước 2", "Bước 3"];
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.back} onPress={handleNavigateBack}>
          <SimpleLineIcons name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading_title}>{t('title:SignUp')}</Text>
        <Text style={styles.heading_title_item}>{t('title:title_signup')}</Text>
        <Image source={PosterLove} style={styles.Poster} />
      </View>

      <View style={styles.backgroudcontainer}>
      <StepIndicator
          customStyles={customStyles}
          currentPosition={currentStep}
          labels={stepLabels}
          stepCount={stepLabels.length}
          onPress={onPageChange}
        />

        {currentStep === 0 && (
          <Step1
            loginUser={loginUser}
            setLoginUser={setLoginUser}
            loginNumber={loginNumber}
            setLoginNumber={setLoginNumber}
            loginEmail={loginEmail}
            setLoginEmail={setLoginEmail}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
            EnterPassword={EnterPassword}
            setEnterPassword={setEnterPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}

        {currentStep === 1 && <Step2
          Agentname={Agentname}
          setAgentname={setAgentname}
          Partner={Partner}
          setPartner={setPartner}
          Source={Source}
          setSource={setSource}
          Provincial={Provincial}
          setProvincial={setProvincial}
          District={District}
          setDistrict={setDistrict}
          Address={Address}
          setAddress={setAddress}
        />}

        {currentStep === 2 && <Step3 />}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from './styles';
const PosterLove = require('./../../../assets/img/Poster-ban-tim.png');

const Step1: React.FC = ({
  loginUser,
  setLoginUser,
  loginNumber,
  setLoginNumber,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  EnterPassword,
  setEnterPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={loginUser}
        onChangeText={(text) => setLoginUser(text)}
        placeholderTextColor="#00000040"
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={loginNumber}
        onChangeText={(text) => setLoginNumber(text)}
        placeholderTextColor="#00000040"
      />
      <TextInput
        style={styles.input}
        placeholder="Mail"
        value={loginEmail}
        onChangeText={(text) => setLoginEmail(text)}
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
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        secureTextEntry={!showPassword}
        value={EnterPassword}
        onChangeText={(text) => setEnterPassword(text)}
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
  );
};

const Step2: React.FC = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      {/* Your Step 2 content */}
    </View>
  );
};

const Step3: React.FC = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      {/* Your Step 3 content */}
    </View>
  );
};

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(0);
  const [loginUser, setLoginUser] = useState('');
  const [loginNumber, setLoginNumber] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [EnterPassword, setEnterPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const onNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
    // Add logic for the submit step if needed
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: 'lightblue',
    activeLabelColor: 'black',
    activeStepNumColor: 'black',
    activeStepIconColor: 'lightblue',
    completedStepIconColor: 'lightgreen',
    completedProgressBarColor: 'lightgreen',
    completedCheckColor: 'green',
  };

  const buttonTextStyle = {
    color: '#686868',
    fontWeight: 'bold',
  };

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
        <ProgressSteps {...progressStepsStyle} activeStep={currentStep}>
          <ProgressStep
            label="Bước 1"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
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
          </ProgressStep>

          <ProgressStep 
            label="Bước 2"
            onPrevious={onPrevStep}
            onSubmit={onSubmitSteps}
            scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <Step2 />
          </ProgressStep>

          <ProgressStep
            label="Bước 3"
            onPrevious={onPrevStep}
            onSubmit={onSubmitSteps}
            scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <Step3 />
          </ProgressStep>
        </ProgressSteps>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

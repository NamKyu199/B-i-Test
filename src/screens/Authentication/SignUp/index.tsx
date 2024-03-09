import React, { useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import BottomSheet from '@gorhom/bottom-sheet';``
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';


const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const PosterLove = require('./../../../assets/img/Poster-ban-tim.png');

  const [currentStep, setCurrentStep] = useState(0);
  const [loginUser, setLoginUser] = useState('');
  const [loginNumber, setLoginNumber] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [EnterPassword, setEnterPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [Agentname, setAgentname] = useState('');
  const [Partner, setPartner] = useState('');
  const [Source, setSource] = useState('');
  const [Provincial, setProvincial] = useState('');
  const [District, setDistrict] = useState('');
  const [Address, setAddress] = useState('');

  const handleNavigateSuccessful = () => {
    navigation.navigate('SuccessfulScreen');
  };

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
    // Thêm logic xử lý khi nhấn nút hoàn thành (Submit) nếu cần
  };

  const labels = ['Bước 1', 'Bước 2', 'Bước 3'];

  const customStyles = {
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

  const onPageChange = (position: React.SetStateAction<number>) => {
    setCurrentStep(position);
  };

  const Step1: React.FC<{
    loginUser: string;
    setLoginUser: React.Dispatch<React.SetStateAction<string>>;
    loginNumber: string;
    setLoginNumber: React.Dispatch<React.SetStateAction<string>>;
    loginEmail: string;
    setLoginEmail: React.Dispatch<React.SetStateAction<string>>;
    loginPassword: string;
    setLoginPassword: React.Dispatch<React.SetStateAction<string>>;
    EnterPassword: string;
    setEnterPassword: React.Dispatch<React.SetStateAction<string>>;
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    onNextStep: () => void;
  }> = ({
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
    onNextStep,
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
        <TouchableOpacity style={styles.nextButton} onPress={onNextStep}>
          <Text style={styles.nextButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const Step2: React.FC<{
    Agentname: string;
    setAgentname: React.Dispatch<React.SetStateAction<string>>;
    Partner: string;
    setPartner: React.Dispatch<React.SetStateAction<string>>;
    Source: string;
    setSource: React.Dispatch<React.SetStateAction<string>>;
    Provincial: string;
    setProvincial: React.Dispatch<React.SetStateAction<string>>;
    District: string;
    setDistrict: React.Dispatch<React.SetStateAction<string>>;
    Address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    onNextStep: () => void;
    onPrevStep: () => void;
  }> = ({
    Agentname,
    setAgentname,
    Partner,
    setPartner,
    Source,
    setSource,
    Provincial,
    setProvincial,
    District,
    setDistrict,
    Address,
    setAddress,
    onNextStep,
    onPrevStep,
  }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="Tên đại lý"
          value={Agentname}
          onChangeText={(text) => setAgentname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Đối tác"
          value={Partner}
          onChangeText={(text) => setPartner(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên nguồn"
          value={Source}
          onChangeText={(text) => setSource(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Thành phố/Tỉnh"
          value={Provincial}
          onChangeText={(text) => setProvincial(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quận/Huyện"
          value={District}
          onChangeText={(text) => setDistrict(text)}
        />
        <TextInput
          style={styles.inputaddress}
          placeholder="Địa chỉ cụ thể"
          value={Address}
          onChangeText={(text) => setAddress(text)}
        />
  
        <View style={styles.stepButtonsContainer}>
          <TouchableOpacity style={styles.prevButton} onPress={onPrevStep}>
            <Text style={styles.prevButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNavigateSuccessful}>
            <Text style={styles.nextButtonText}>Nhận mã xác thực qua SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  // const Step3: React.FC = () => {
  //   const bottomSheetRef = useRef<BottomSheet>(null);
  
  //   const snapPoints = useMemo(() => ['60%'], []);
  
  //   const onPrevStep = () => {
  //     // Thực hiện các xử lý khi nhấn nút quay lại ở bước 3
  //     console.log('Go back to previous step in Step3');
  //   };
  
  //   const onCodeFilled = (code: string) => {
  //     console.log(`Code is ${code}, you are good to go!`);
  //     bottomSheetRef.current?.close();
  //     // Thực hiện các xử lý khi mã OTP được nhập đúng
  //   };
  //   return (
  //     <View style={{ alignItems: 'center' }}>
  //       <BottomSheet
  //         ref={bottomSheetRef}
  //         snapPoints={snapPoints}
  //         bottomInset={46}
  //         detached={true}
  //         style={styles.sheetContainer}
  //       >
  //         <View style={styles.contentContainer}>
  //           <OTPInputView
  //             ref={otpInputRef}
  //             style={styles.otpInput}
  //             pinCount={4}
  //             autoFocusOnLoad
  //             codeInputFieldStyle={styles.underlineStyleBase}
  //             codeInputHighlightStyle={styles.underlineStyleHighLighted}
  //             onCodeFilled={onCodeFilled}
  //           />
  //         </View>
  //         <TouchableOpacity style={styles.prevButton} onPress={onPrevStep}>
  //           <Text style={styles.prevButtonText}>Back</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.prevButton} onPress={onSubmitSteps}>
  //           <Text style={styles.prevButtonText}>Xác nhận</Text>
  //         </TouchableOpacity>
  //       </BottomSheet>
  //     </View>
  //   );
  // };

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
          labels={labels}
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
            onNextStep={onNextStep}
          />
        )}
        {currentStep === 1 && (
          <Step2
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
            onNextStep={onNextStep}
            onPrevStep={onPrevStep}
          />
        )}

        {currentStep === 2 && <Step3 />}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

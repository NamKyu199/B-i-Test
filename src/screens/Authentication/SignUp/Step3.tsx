import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Step3: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['60%'], []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        bottomInset={46}
        detached={true}
        style={styles.sheetContainer}
      >
        <View style={styles.contentContainer}>
          <OTPInputView
            style={styles.otpInput}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
              bottomSheetRef.current?.close();
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  otpInput: {
    width: '80%',
    height: 200,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default Step3;

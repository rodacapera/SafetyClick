import {LoginFormAction} from '@src/types/loginTypes';
import {useEffect, useRef, useState} from 'react';
import {OtpInputRef} from 'react-native-otp-entry';
import {getOtp, removeOtpCode, timerCount} from './otpFunctions';

const OtpHook = ({buttonAction}: {buttonAction: LoginFormAction}) => {
  const inputRef = useRef<OtpInputRef>();
  const [code, setCode] = useState('');
  const [errorOtp, setErrorOtp] = useState(false);
  const [sendOtpCode, setSendOtpCode] = useState(false);
  const [counter, setCounter] = useState(60);
  const [errorNetwork, setErrorNetwork] = useState(false);
  const [isCodeRequested, setIsCodeRequested] = useState(false);
  const [isLoadingValidateOtp, setIsLoadingValidateOtp] = useState(false);

  useEffect(() => {
    const initOtp = async () => {
      if (!isCodeRequested) {
        await removeOtpCode();
        const sendOtpCodeRequest = await getOtp(buttonAction, setSendOtpCode);
        !sendOtpCodeRequest
          ? setErrorNetwork(!sendOtpCodeRequest)
          : setIsCodeRequested(true);
      }
    };
    initOtp();
  }, [buttonAction, isCodeRequested]);

  useEffect(() => {
    counter === 60 &&
      timerCount(setCounter, setSendOtpCode, sendOtpCode, counter);
    counter == 0 && setSendOtpCode(false);
    code === '' && (setErrorOtp(false), setCode(''));
  }, [sendOtpCode, code, counter]);

  return {
    inputRef,
    code,
    setCode,
    errorOtp,
    setErrorOtp,
    sendOtpCode,
    setSendOtpCode,
    counter,
    setCounter,
    errorNetwork,
    setErrorNetwork,
    isLoadingValidateOtp,
    setIsLoadingValidateOtp,
    isCodeRequested
  };
};

export {OtpHook};

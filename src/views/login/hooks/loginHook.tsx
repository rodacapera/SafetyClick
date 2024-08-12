import {useNavigation} from '@react-navigation/native';
import {buttonActionInitialState} from '@src/globals/constants/login';
import {getUserByPhoneNumberFirebase} from '@src/hooks/firebase/user/user';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {StackNavigation} from '@src/types/globalTypes';
import {LoginFormAction} from '@src/types/loginTypes';
import {User} from '@src/types/userTypes';
import {useCallback, useEffect, useState} from 'react';

const LoginHook = (data?: User) => {
  const navigation = useNavigation<StackNavigation>();
  const [errorPhone, setErrorPhone] = useState(false);
  const [buttonAction, setButtonAction] = useState(buttonActionInitialState);
  const [currentButtonAction, setCurrentButtonAction] =
    useState<LoginFormAction>(buttonActionInitialState);
  const [errorUserNotExist, setErrorUserNotExist] = useState(false);

  const validateRegEx = useCallback(() => {
    if (buttonAction.phone != '') {
      const re = /[1-9]\d{9,14}$/;
      const phone = buttonAction.phone.slice(buttonAction.countryCodeSize + 1);
      return re.test(phone);
    }
    return false;
  }, [buttonAction.countryCodeSize, buttonAction.phone]);

  useEffect(() => {
    const validatePhoneNumber = () => {
      const validate = validateRegEx();
      if (validate) {
        const userExist = getUserByPhoneNumberFirebase(buttonAction.phone);
        userExist.then(querySnapshot => {
          if (querySnapshot.empty) {
            setErrorPhone(false);
            setErrorUserNotExist(true);
          } else {
            if (querySnapshot.docs[0].data().pay) {
              const buttonActionClone = {...buttonAction};
              buttonActionClone.logged = true;
              setButtonAction(buttonActionClone);
              setErrorPhone(false);
              setErrorPhone(false);
              setErrorUserNotExist(false);
            } else {
              setErrorPhone(false);
              setErrorUserNotExist(true);
            }
          }
        });
        // setTimeout(() => {
        setErrorUserNotExist(false);
        // }, 5000);
      } else {
        setErrorPhone(true);
      }
    };

    if (data) {
      buttonAction.phone = data.phone;
    }
    !buttonAction.logged &&
      buttonAction?.phone?.length > 3 &&
      validatePhoneNumber();
  }, [buttonAction, data, validateRegEx]);

  useEffect(() => {
    !currentButtonAction.logged &&
      HeaderShown({
        navigation,
        visible: false,
        transparent: false
      });
  }, [currentButtonAction.logged, navigation]);

  return {
    errorPhone,
    setErrorPhone,
    buttonAction,
    setButtonAction,
    currentButtonAction,
    setCurrentButtonAction,
    validateRegEx,
    errorUserNotExist,
    setErrorUserNotExist
  };
};
export {LoginHook};

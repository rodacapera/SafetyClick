import {lightTheme} from '@src/hooks/lightMode';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {InputFormProps} from '@src/types/loginTypes';
import {t} from 'i18next';
import {useEffect, useState} from 'react';
import {Keyboard, View, useColorScheme} from 'react-native';
import {TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';
import {loginFormStyles} from '../../views/login/styles/loginFormStyles';

const CustomInputForm = ({
  type,
  phoneRef,
  setButtonAction,
  value,
  code,
  isDisabled,
  isRegister,
  prefix
}: InputFormProps) => {
  const colorScheme = useColorScheme();
  const [phone, setPhone] = useState<string>();
  const [focusPhone, setFocusPhone] = useState(false);
  const {colors} = ActualTheme();
  const [currentPhone, setCurrentPhone] = useState<string>();
  const transparent = 'transparent';

  const handlePhoneNumber = (text: string) => {
    const countryCode = phoneRef.current.getCountryCode();
    const myPhone = `+${countryCode}${text}`;
    setButtonAction({
      name: 'login',
      show: false,
      phone: myPhone,
      logged: false,
      confirmation: undefined,
      countryCodeSize: countryCode.length,
      sendRegister: false,
      prefix: countryCode
    });
    setCurrentPhone(myPhone);
    setPhone(text);
  };

  useEffect(() => {
    const countryCode = phoneRef?.current?.getCountryCode();
    setButtonAction({
      name: 'login',
      show: !focusPhone,
      phone: currentPhone!,
      logged: false,
      confirmation: undefined,
      countryCodeSize: countryCode?.length,
      sendRegister: !focusPhone,
      prefix: countryCode
    });
  }, [currentPhone, focusPhone, phoneRef, setButtonAction, phone]);

  useEffect(() => {
    value && !phone && prefix && setPhone(value.slice(prefix.length + 1));
  }, [phone, phoneRef, prefix, value]);

  return (
    <View
      style={[
        loginFormStyles.phoneInputContainer,
        {
          borderBottomWidth: focusPhone ? 1.9 : 0.7,
          borderBottomColor: focusPhone
            ? colors.error
            : colorScheme == 'dark'
            ? colors.outline
            : colors.onSurface
        }
      ]}>
      <View style={loginFormStyles.phoneFlagContent}>
        {type === 'phone' && code ? (
          <PhoneInput
            ref={ref => {
              phoneRef.current = ref;
            }}
            textStyle={{
              color: colorScheme == 'dark' ? colors.onSurface : colors.onSurface
            }}
            pickerBackgroundColor={colors.background}
            cancelTextStyle={{color: colors.onSecondaryContainer}}
            confirmTextStyle={{color: colors.onSecondaryContainer}}
            pickerItemStyle={{
              color: colorScheme == 'dark' ? colors.onSurface : colors.onSurface
            }}
            initialCountry={code}
            disabled={isDisabled}
            // onSelectCountry={() => handlePhoneNumber(phone!)}
            // initialValue="1"
          />
        ) : (
          <></>
        )}
      </View>

      <TextInput
        style={loginFormStyles.phone}
        mode="flat"
        outlineColor={'transparent'}
        placeholder="3003543968"
        placeholderTextColor={lightTheme.colors.outlineVariant}
        underlineStyle={{
          backgroundColor: transparent
        }}
        textColor={colors.onSurface} //ok on profile
        theme={{
          colors: {
            primary: colors.error,
            onSurfaceVariant: colors.onSurface
          }
        }}
        onFocus={() => setFocusPhone(true)}
        onBlur={() => setFocusPhone(false)}
        dense={true}
        // right={
        //   <TextInput.Icon
        //     icon={() => <CustomIcon name={'camera'} size={20} />}
        //   />
        // }
        onSubmitEditing={Keyboard.dismiss}
        inputMode="numeric"
        label={t('general.phone')}
        value={phone}
        onChangeText={text => handlePhoneNumber(text)}
        editable={isRegister ? true : !isDisabled}
      />
    </View>
  );
};

export default CustomInputForm;

import {useNavigation} from '@react-navigation/native';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {GetPanicsQuery} from '@src/reactQuery/notifyQuery';
import {StackNavigation} from '@src/types/globalTypes';
import {Panics} from '@src/types/userTypes';
import {useEffect, useState} from 'react';
import {Platform, useColorScheme, useWindowDimensions} from 'react-native';

const NotifyHook = () => {
  const {width} = useWindowDimensions();
  const colorScheme = useColorScheme();
  const {dark, colors} = ActualTheme();
  const {data} = GetPanicsQuery();
  const navigation = useNavigation<StackNavigation>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data) {
      HeaderShown({
        width: width,
        navigation,
        visible: true,
        transparent: false,
        titleColor:
          Platform.OS == 'android'
            ? colorScheme === 'dark'
              ? '#a23234'
              : dark
              ? colors.onSurface
              : colors.onPrimaryContainer
            : colors.onPrimaryContainer
      });
    }
  }, [
    navigation,
    data,
    dark,
    width,
    colorScheme,
    colors.onSurface,
    colors.onPrimaryContainer
  ]);

  return {
    panics: data as Panics[],
    setModalVisible,
    modalVisible,
    colors,
    dark
  };
};

export {NotifyHook};

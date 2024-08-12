import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {CustomFabProps} from '@src/types/globalTypes';
import {Fragment, useEffect, useState} from 'react';
import {Platform, PlatformIOSStatic, View, ViewStyle} from 'react-native';
import {FAB as Fab} from 'react-native-paper';
import {validatePosition} from './hooks/customFabHook';
import {customFabStyles} from './styles/customFabStyles';

const CustomFab = ({
  onPress,
  icon,
  position,
  style,
  label,
  iconColor,
  disabled = false,
  children
}: CustomFabProps) => {
  const {colors} = ActualTheme();
  const [currentPosition, setCurrentPosition] = useState<ViewStyle>(
    customFabStyles.bottomRight
  );

  // const platformIOS = Platform as PlatformIOSStatic;
  // console.log(platformIOS.isPad);
  // console.log(platformIOS.isTV);

  useEffect(() => {
    validatePosition(position, setCurrentPosition);
  }, [position]);

  return children ? (
    <Fragment>
      <View
        style={[
          currentPosition,
          {
            display: 'flex',
            flexDirection: 'row'
          }
        ]}>
        <Fab
          theme={{
            colors: {
              onSurfaceDisabled: colors.onSurfaceDisabled
            }
          }}
          icon={icon}
          label={label}
          color={iconColor}
          style={style}
          onPress={() => onPress(true)}
          disabled={disabled}
        />
        {children}
      </View>
    </Fragment>
  ) : (
    <Fab
      theme={{
        colors: {
          onSurfaceDisabled: colors.onSurfaceDisabled
        }
      }}
      icon={icon}
      label={label}
      color={iconColor}
      style={[currentPosition, style]}
      onPress={() => onPress(true)}
      disabled={disabled}
    />
  );
};
export default CustomFab;

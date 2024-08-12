import {useNavigation} from '@react-navigation/native';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {StackNavigation} from '@src/types/globalTypes';
import {qrScanStyles} from '@src/views/qrScanner/styles/qrscanStyles';
import {t} from 'i18next';
import {Platform, View, useWindowDimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {IconButton, Text} from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {QrScanHook} from '../../login/hooks/qrScanHook';

const QrScan = () => {
  const {dark, colors} = ActualTheme();
  const {goBack} = useNavigation<StackNavigation>();
  const {height} = useWindowDimensions();
  const {onSuccess, flash, setFlash, marker} = QrScanHook();

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={flash}
      showMarker
      reactivate
      fadeIn={false}
      customMarker={marker('white', 250, '25%', 6, 20)}
      topContent={
        <Text
          style={[
            qrScanStyles.centerText,
            {
              color: colors.onSurfaceVariant
            }
          ]}>
          {t('qrScan.title')}
        </Text>
      }
      bottomContent={
        <View style={qrScanStyles.buttonContainer}>
          <View style={qrScanStyles.buttonContent}>
            <IconButton
              style={{
                backgroundColor: colors.onSurfaceDisabled
              }}
              mode="contained-tonal"
              iconColor={dark ? colors.onSurface : colors.onPrimaryContainer}
              icon="location-exit"
              onPress={() => goBack()}
            />
            <IconButton
              style={{
                backgroundColor: colors.onSurfaceDisabled
              }}
              mode="contained-tonal"
              iconColor={dark ? colors.onSurface : colors.onPrimaryContainer}
              icon="flashlight"
              onPress={() => setFlash(RNCamera.Constants.FlashMode.torch)}
            />
            <IconButton
              style={{
                backgroundColor: colors.onSurfaceDisabled
              }}
              mode="contained-tonal"
              iconColor={dark ? colors.onSurface : colors.onPrimaryContainer}
              icon="flashlight-off"
              onPress={() => setFlash(RNCamera.Constants.FlashMode.off)}
            />
          </View>
        </View>
      }
      // cameraProps={{autoFocus: 'on', videoStabilizationMode: 'auto'}}
      cameraStyle={{
        height: Platform.OS == 'android' ? height * 0.4 : height * 0.55
      }}
      topViewStyle={{paddingBottom: Platform.OS == 'android' ? 80 : 10}}
      bottomViewStyle={{
        marginTop: Platform.OS == 'android' ? 20 : -40,
        marginBottom: Platform.OS == 'android' ? 5 : 50
      }}
    />
  );
};

export default QrScan;

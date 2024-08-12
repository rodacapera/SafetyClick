import {backgroundStyle} from '@src/globals/styles/screenMode';
import {SafeAreaView, View} from 'react-native';
import QrScan from './components/QrScan';
import {qrScanStyles} from './styles/qrscanStyles';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';

const QrScanner = () => {
  const {colors} = ActualTheme();
  return (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <View style={qrScanStyles.viewContainer}>
        <QrScan />
      </View>
    </SafeAreaView>
  );
};

export default QrScanner;

import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {View} from 'react-native';
import {Callout} from 'react-native-maps';
import {Text} from 'react-native-paper';

const CalloutBadge = ({title, body}: {title: string; body: string}) => {
  const {dark, colors} = ActualTheme();
  const textColor = dark ? colors.background : colors.onSurface;
  return (
    <Callout>
      <View>
        <Text style={{fontWeight: 'bold', color: textColor}}>{title}</Text>
        <Text style={{color: textColor}}>{body}</Text>
      </View>
    </Callout>
  );
};

export default CalloutBadge;

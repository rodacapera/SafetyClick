import {useNavigation} from '@react-navigation/native';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {headerStyles} from './styes/headerStyles';

const transparent = 'transparent';

const HeaderTitle = ({title}: {title: string}) => {
  const {goBack} = useNavigation();
  const {dark, colors} = ActualTheme();
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.arrowBackIcon}>
        <IconButton
          icon="arrow-left"
          mode="contained-tonal"
          iconColor={dark ? colors.onSurface : colors.onPrimaryContainer}
          style={{
            backgroundColor: transparent
          }}
          onPress={() => goBack()}
        />
      </View>
      <Text
        style={[
          headerStyles.title,
          {
            color: dark ? colors.onSurface : colors.onPrimaryContainer
          }
        ]}
        numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;

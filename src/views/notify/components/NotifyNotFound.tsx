import {user_not_found} from '@src/assets/images';
import CustomImage from '@src/components/customImage/CustomImage';
import TextWithCustomLink from '@src/components/textWithCustomLink/TextWithCustomLink';
import {t} from 'i18next';
import {View} from 'react-native';
import {notifyStyles} from '../styles/notifyStyles';

const NotifyNotFound = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CustomImage source={user_not_found} style={notifyStyles} />
      <TextWithCustomLink text={t('notifyView.notifyNotFound')} visible />
    </View>
  );
};

export default NotifyNotFound;

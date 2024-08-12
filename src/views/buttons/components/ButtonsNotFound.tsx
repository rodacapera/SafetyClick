import {user_not_found} from '@src/assets/images';
import CustomImage from '@src/components/customImage/CustomImage';
import TextWithCustomLink from '@src/components/textWithCustomLink/TextWithCustomLink';
import {Config} from '@src/hooks/config/config';
import {t} from 'i18next';
import {View} from 'react-native';
import {buttonsStyles} from '../styles/buttonsStyles';

const ButtonsNotFound = () => {
  const {videoLinks} = Config();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CustomImage source={user_not_found} style={buttonsStyles} />
      <TextWithCustomLink
        text={t('buttonsView.buttonsNotFound')}
        link={videoLinks?.buttonNotFoundVideoUrl}
        visible
      />
    </View>
  );
};

export default ButtonsNotFound;

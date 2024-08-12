import {user_not_found} from '@src/assets/images';
import CustomImage from '@src/components/customImage/CustomImage';
import TextWithCustomLink from '@src/components/textWithCustomLink/TextWithCustomLink';
import {Config} from '@src/hooks/config/config';
import {t} from 'i18next';
import {View} from 'react-native';
import {employeeStyles} from '../styles/employeesStyles';

const UsersNotFound = () => {
  const {videoLinks} = Config();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CustomImage source={user_not_found} style={employeeStyles} />
      <TextWithCustomLink
        text={t('employeesView.employeeNotFound')}
        link={videoLinks?.userNotFoundVideoUrl}
        visible
      />
    </View>
  );
};

export default UsersNotFound;

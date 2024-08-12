import CustomBanner from '@src/components/customBanner/CustomBanner';
import {backgroundStyle} from '@src/globals/styles/screenMode';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {t} from 'i18next';
import {SafeAreaView} from 'react-native';
import UserForm from '../register/forms/UserForm';

const Profile = () => {
  const {colors} = ActualTheme();
  return (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <CustomBanner
        visible={true}
        text={t('profileTitle')}
        icon="account-edit"
      />
      <UserForm />
    </SafeAreaView>
  );
};

export default Profile;

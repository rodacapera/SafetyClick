import CustomBanner from '@src/components/customBanner/CustomBanner';
import SimpleRemoveItemCards from '@src/components/simpleRemoveItemCards/SimpleRemoveItemCards';
import {backgroundStyle} from '@src/globals/styles/screenMode';
import {t} from 'i18next';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NotifyNotFound from './components/NotifyNotFound';
import {notifyStyles} from './styles/notifyStyles';
import {NotifyHook} from './hooks/notifyHook';

export const Notify = () => {
  const {panics, setModalVisible, modalVisible, colors, dark} = NotifyHook();
  return (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <CustomBanner
        visible={true}
        text={t('notifyView.banner')}
        icon="security"
      />
      <ScrollView contentContainerStyle={notifyStyles.container}>
        {panics.length > 0 ? (
          panics.map((value, index) => (
            <SimpleRemoveItemCards
              titleCard={value.alias}
              subtitleCard={value.title}
              titleAlert={value.title}
              subtitleAlert={value.body}
              id={value.user_uid}
              key={index}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              touchable
            />
          ))
        ) : (
          <NotifyNotFound />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notify;

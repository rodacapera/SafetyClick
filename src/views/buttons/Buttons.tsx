import ButtonsModal from '@src/components/buttonsModal/ButtonsModal';
import CustomBanner from '@src/components/customBanner/CustomBanner';
import CustomDialogAlert from '@src/components/customDialogAlert/CustomDialogAlert';
import CustomFab from '@src/components/customFab/CustomFab';
import CustomLoader from '@src/components/customLoader/CustomLoader';
import CustomLoadingOverlay from '@src/components/customLoadingOverlay/CustomLoadingOverlay';
import SimpleRemoveItemCards from '@src/components/simpleRemoveItemCards/SimpleRemoveItemCards';
import {backgroundStyle} from '@src/globals/styles/screenMode';
import {t} from 'i18next';
import {KeyboardAvoidingView, Platform, SafeAreaView, View} from 'react-native';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {employeeStyles} from '../employees/styles/employeesStyles';
import ButtonFound from './components/ButtonFound';
import ButtonsNotFound from './components/ButtonsNotFound';
import {Buttonhook} from './hooks/buttonHook';

const Buttons = () => {
  const {
    alertVisible,
    setAlertVisible,
    removeItem,
    buttons,
    visible,
    setVisible,
    isLoading,
    buttonFind,
    onRefresh,
    refreshing,
    setButtonFind,
    setSendRemoveItem,
    setNewButtons,
    colors
  } = Buttonhook();

  return isLoading ? (
    <CustomLoadingOverlay visible />
  ) : (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <CustomBanner
          visible={true}
          text={t('buttonsView.banner')}
          icon="security"
        />
        <View style={employeeStyles.container}>
          <ScrollView
            style={{width: '100%'}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View
              style={{
                alignItems: 'center',
                width: '100%'
              }}>
              {buttons.length == 0 && <ButtonsNotFound />}
              {buttons.map((value, index) => (
                <SimpleRemoveItemCards
                  titleCard={`${t('buttonsView.button')}: ${index + 1}`}
                  subtitleCard={value.reference}
                  removeItem={removeItem}
                  key={index}
                  id={value.uid!}
                />
              ))}
              <View style={{marginTop: 20}}>
                {buttonFind ? (
                  buttonFind.ip != '' ? (
                    <ButtonFound buttonFind={buttonFind} />
                  ) : (
                    <View>
                      <Text style={{color: colors.error}}>
                        {t('buttonsView.noDetectedButton')}
                      </Text>
                    </View>
                  )
                ) : (
                  <View style={{width: 70}}>
                    <CustomLoader visible label={t('buttonsView.searching')} />
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
        <CustomFab
          position="bottomRight"
          icon="shield-plus"
          onPress={() => setVisible(true)}
        />

        <CustomDialogAlert
          visible={alertVisible}
          setVisible={setAlertVisible}
          cancelButton
          title={t('buttonsView.alertTitleErrorDeleteButton')}
          description={t('buttonsView.alertDescriptionErrorDeleteButton')}
          actionSuccess={setSendRemoveItem}
        />
        <ButtonsModal
          visible={visible}
          setVisible={setVisible}
          buttons={buttons}
          setButtonFind={setButtonFind}
          setNewButtons={setNewButtons}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Buttons;

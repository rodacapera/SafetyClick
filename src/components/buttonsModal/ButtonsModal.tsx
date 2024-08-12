import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {ButtonsModalProps} from '@src/types/buttons';
import {t} from 'i18next';
import {Fragment} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {List, Modal} from 'react-native-paper';
import ButtonsList from '../buttonsList/ButtonsList';
import CustomDialogAlert from '../customDialogAlert/CustomDialogAlert';
import CustomLoader from '../customLoader/CustomLoader';
import TextWithCustomLink from '../textWithCustomLink/TextWithCustomLink';
import AddButtonForm from './components/addButtonForm/AddButtonForm';
import Header from './components/header/Header';
import {ButtonsModalHook} from './hook/ButtonsModalHook';
import {buttonsModalStyles} from './styles/buttonsModalStyles';

const ButtonsModal = ({
  visible,
  setVisible,
  buttons,
  setButtonFind,
  setNewButtons
}: ButtonsModalProps) => {
  const {dark, colors, theme} = ActualTheme();
  const {
    networks,
    firsStep,
    setFirsStep,
    hideModal,
    networksStatus,
    setSendSetButton,
    setNameIsd,
    setPassIsd,
    urlConfigButton,
    saveButton,
    internetError,
    savingData,
    passIsd,
    sendSetButton,
    config,
    buttonExist,
    setButtonExist,
    unConnectedShellyButton,
    buttonNotReady
  } = ButtonsModalHook({
    setVisible,
    buttons,
    setButtonFind,
    setNewButtons,
    visible
  });

  return (
    <Modal
      visible={visible}
      dismissable={!urlConfigButton}
      onDismiss={!urlConfigButton ? hideModal : undefined}
      contentContainerStyle={[
        buttonsModalStyles.modalContainer,
        {
          backgroundColor: dark ? colors.surfaceVariant : colors.background
        }
      ]}>
      <View style={buttonsModalStyles.modalContent}>
        <Header visible={networksStatus} />
        <CustomLoader visible={networksStatus} label={t('general.scanning')} />
        <CustomDialogAlert
          visible={buttonExist}
          setVisible={setButtonExist}
          title={t('buttonsModal.errorButtonExistTitle')}
          description={t('buttonsModal.errorButtonExistDescription')}
        />

        {networks && networks[0].name && (
          <Fragment>
            {firsStep == '' ? (
              <ButtonsList height={400} width={320}>
                {networks.map((value, index) => {
                  return (
                    <TouchableOpacity
                      style={buttonsModalStyles.button}
                      key={index}
                      onPress={() => setFirsStep(value.name!)}>
                      <List.Item
                        theme={theme}
                        title={value.name}
                        description={value.description}
                        left={props => <List.Icon {...props} icon="wifi" />}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ButtonsList>
            ) : (
              <View>
                <AddButtonForm
                  backButton={setFirsStep}
                  iss={firsStep}
                  setSendSetButton={setSendSetButton}
                  setNameIsd={setNameIsd}
                  setPassIsd={setPassIsd}
                  urlConfigButton={urlConfigButton}
                  saveButton={saveButton}
                  internetError={internetError}
                  savingData={savingData}
                  passIsd={passIsd}
                  sendSetButton={sendSetButton}
                  unConnectedShellyButton={unConnectedShellyButton}
                  buttonNotReady={buttonNotReady}
                />
              </View>
            )}
          </Fragment>
        )}
        <TextWithCustomLink
          text={t('buttonsModal.helperFooterQrFirst')}
          link={config.videoLinks?.addButton}
          visible={networksStatus}
        />
      </View>
    </Modal>
  );
};

export default ButtonsModal;

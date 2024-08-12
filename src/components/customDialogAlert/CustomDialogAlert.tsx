import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {CustomDialogAlertProps} from '@src/types/globalTypes';
import {t} from 'i18next';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {customDialogAlertStyles} from './styles/customDialogAlertStyles';

const CustomDialogAlert = ({
  visible,
  setVisible,
  cancelButton,
  actionSuccess,
  title,
  description,
  continueButton = false
}: CustomDialogAlertProps) => {
  const {colors} = ActualTheme();
  const handleSuccess = () => {
    actionSuccess && actionSuccess(true);
    setVisible(false);
  };
  return (
    <Portal>
      <Dialog
        style={{backgroundColor: colors.background}}
        visible={visible}
        onDismiss={() => setVisible(false)}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title
          style={[customDialogAlertStyles.title, {color: colors.onSurface}]}>
          {title}
        </Dialog.Title>
        <Dialog.Content>
          <Text
            variant="bodyMedium"
            style={{color: colors.onSurface, textAlign: 'center'}}>
            {description}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          {cancelButton && (
            <Button
              onPress={() => setVisible(false)}
              textColor={colors.onSurface}>
              {t('general.cancel')}
            </Button>
          )}
          <Button onPress={handleSuccess} textColor={colors.onSurface}>
            {continueButton ? t('general.continue') : t('general.ok')}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CustomDialogAlert;

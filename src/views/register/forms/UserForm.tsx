import CustomDialogAlert from '@src/components/customDialogAlert/CustomDialogAlert';
import CustomIcon from '@src/components/customIcon/CustomIcon';
import CustomInputForm from '@src/components/customInputForm/CustomInputForm';
import CustomLoader from '@src/components/customLoader/CustomLoader';
import {Fragment, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View
} from 'react-native';
import {Button, Caption, TextInput} from 'react-native-paper';
import {registerStyles} from '../styles/registerStyles';
import {UserFormHook} from './hooks/userFormHook';

const UserForm = ({qr, shopId}: {qr?: boolean; shopId?: string}) => {
  const {t} = useTranslation();
  const phoneRef = useRef();
  const {
    user,
    setCurrentButtonAction,
    handleOnchangeInput,
    handleEditUser,
    isLoading,
    error,
    shop,
    alertUserExist,
    setAlertUserExist,
    colors,
    dark,
    theme,
    alertRemoveUser,
    setAlertRemoveUser,
    setActionRemoveUser
  } = UserFormHook(qr, shopId);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        style={registerStyles.body}
        showsVerticalScrollIndicator={false}>
        <CustomDialogAlert
          visible={alertUserExist}
          setVisible={() => setAlertUserExist(false)}
          title={t('registerView.errorUserRegisterTitle')}
          description={t('registerView.errorUserRegisterDescription')}
        />
        <CustomDialogAlert
          visible={alertRemoveUser}
          setVisible={() => setAlertRemoveUser(false)}
          actionSuccess={setActionRemoveUser}
          title={t('profileView.titleAlertRemoveUser')}
          description={t('profileView.descriptionAlertRemoveUser')}
          cancelButton
        />
        <View
          style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          {user && (
            <CustomInputForm
              phoneRef={phoneRef}
              setButtonAction={setCurrentButtonAction}
              type="phone"
              value={user?.phone}
              code={user?.countryCode?.toLowerCase()}
              isDisabled={user?.shop ? true : false}
              prefix={user.prefix}
            />
          )}
          <TextInput
            label={t('adminFormView.names')}
            style={registerStyles.input}
            theme={theme}
            left={
              <TextInput.Icon
                icon={() => (
                  <CustomIcon
                    name={'pencil'}
                    font={'awesome'}
                    color={colors.onSurface}
                  />
                )}
              />
            }
            value={user?.name ?? ''}
            onChangeText={text => handleOnchangeInput(text as never, 'name')}
          />
          <TextInput
            label={t('adminFormView.lastNames')}
            style={registerStyles.input}
            theme={theme}
            left={
              <TextInput.Icon
                icon={() => (
                  <CustomIcon
                    name={'pencil'}
                    font={'awesome'}
                    color={colors.onSurface}
                  />
                )}
              />
            }
            value={user?.lastname ?? ''}
            onChangeText={text =>
              handleOnchangeInput(text as never, 'lastname')
            }
          />
          <TextInput
            label={t('adminFormView.email')}
            style={registerStyles.input}
            theme={theme}
            left={
              <TextInput.Icon
                icon={() => (
                  <CustomIcon
                    name={'envelope'}
                    font={'awesome'}
                    color={colors.onSurface}
                  />
                )}
              />
            }
            inputMode="email"
            value={user?.email ?? ''}
            onChangeText={text => handleOnchangeInput(text as never, 'email')}
          />
          {user?.administrator && (
            <Fragment>
              <TextInput
                label={t('adminFormView.aliasName')}
                style={registerStyles.input}
                theme={theme}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <CustomIcon
                        name={'home'}
                        font={'awesome'}
                        color={colors.onSurface}
                        size={28}
                      />
                    )}
                  />
                }
                value={user?.alias ?? ''}
                onChangeText={text =>
                  handleOnchangeInput(text as never, 'alias')
                }
              />
              <TextInput
                label={t('adminFormView.address')}
                style={registerStyles.input}
                theme={theme}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <CustomIcon
                        name={'map-marker'}
                        font={'awesome'}
                        color={colors.onSurface}
                        size={28}
                      />
                    )}
                  />
                }
                value={user?.address ?? ''}
                onChangeText={text =>
                  handleOnchangeInput(text as never, 'address')
                }
              />
            </Fragment>
          )}
          <View style={registerStyles.footer}>
            <View style={registerStyles.contentFooterText}>
              <Text
                style={[registerStyles.footerText, {color: colors.onSurface}]}>
                {t('adminFormView.address')}
              </Text>
              <Caption
                style={{
                  color: dark
                    ? colors.onSurfaceVariant
                    : colors.onSurfaceDisabled,
                  fontSize: 16
                }}>
                {shop?.address}
              </Caption>
            </View>
            <View style={registerStyles.contentFooterText}>
              <Text
                style={[registerStyles.footerText, {color: colors.onSurface}]}>
                {t('adminFormView.city')}
              </Text>
              <Caption
                style={{
                  color: dark
                    ? colors.onSurfaceVariant
                    : colors.onSurfaceDisabled,
                  fontSize: 16,
                  textTransform: 'capitalize'
                }}>
                {shop?.city}
              </Caption>
            </View>
            <View style={registerStyles.contentFooterText}>
              <Text
                style={[registerStyles.footerText, {color: colors.onSurface}]}>
                {t('adminFormView.state')}
              </Text>
              <Caption
                style={{
                  color: dark
                    ? colors.onSurfaceVariant
                    : colors.onSurfaceDisabled,
                  fontSize: 16,
                  textTransform: 'capitalize'
                }}>
                {shop?.department}
              </Caption>
            </View>
            <View style={registerStyles.contentFooterText}>
              <Text
                style={[registerStyles.footerText, {color: colors.onSurface}]}>
                {t('adminFormView.aliasName')}
              </Text>
              <Caption
                style={{
                  color: dark
                    ? colors.onSurfaceVariant
                    : colors.onSurfaceDisabled,
                  fontSize: 16,
                  textTransform: 'capitalize'
                }}>
                {shop?.alias}
              </Caption>
            </View>
            {user && (
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: colors.error,
                    marginBottom: 10,
                    fontSize: 11,
                    marginTop: 10
                  }}
                  onPress={() => setAlertRemoveUser(true)}>
                  {t('general.removeAccount')}{' '}
                  <Caption
                    style={{
                      color: colors.error,
                      textDecorationLine: 'underline',
                      fontSize: 11,
                      fontWeight: '700'
                    }}>
                    {t('general.here')}
                  </Caption>
                </Text>
              </View>
            )}
          </View>

          {error ? (
            <View>
              <Text style={{color: colors.onSurface}}>error</Text>
            </View>
          ) : (
            <></>
          )}
          <View
            style={{
              paddingBottom: 90,
              alignItems: 'center'
            }}>
            <Button
              textColor="white"
              mode="contained"
              icon={
                isLoading
                  ? () => (
                      <View style={{height: 25}}>
                        <CustomLoader visible label={''} />
                      </View>
                    )
                  : 'check'
              }
              buttonColor={
                dark ? colors.primaryContainer : colors.onPrimaryContainer
              }
              disabled={isLoading}
              onPress={handleEditUser}>
              {t('general.continue')}
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserForm;

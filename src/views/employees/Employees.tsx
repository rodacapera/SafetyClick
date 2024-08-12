import CustomBanner from '@src/components/customBanner/CustomBanner';
import CustomDialogAlert from '@src/components/customDialogAlert/CustomDialogAlert';
import CustomFab from '@src/components/customFab/CustomFab';
import CustomLoadingOverlay from '@src/components/customLoadingOverlay/CustomLoadingOverlay';
import QrModal from '@src/components/qrModal/QrModal';
import SimpleRemoveItemCards from '@src/components/simpleRemoveItemCards/SimpleRemoveItemCards';
import {backgroundStyle} from '@src/globals/styles/screenMode';
import {t} from 'i18next';
import {SafeAreaView, View} from 'react-native';
import UsersNotFound from './components/UsersNotFound';
import {employeeStyles} from './styles/employeesStyles';
import {EmployeesHook} from './hooks/employeesHook';

const Employees = () => {
  const {
    employees,
    visible,
    setVisible,
    alertVisible,
    removeItem,
    setAlertVisible,
    isLoading,
    setModalVisible,
    modalVisible,
    setItemMustRemove,
    colors
  } = EmployeesHook();

  return isLoading ? (
    <CustomLoadingOverlay visible />
  ) : (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <CustomBanner
        visible={true}
        text={t('employeesView.banner')}
        icon="account-group-outline"
      />
      <View style={employeeStyles.container}>
        {employees.length < 1 && <UsersNotFound />}
        {employees.map(
          (value, index) =>
            !value.administrator && (
              <SimpleRemoveItemCards
                titleCard={`${value.name} ${value.lastname}`}
                subtitleCard={value.alias}
                id={value.user_uid}
                key={index}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                removeItem={removeItem}
              />
            )
        )}
      </View>
      <CustomFab
        position="bottomRight"
        icon="account-plus-outline"
        onPress={() => setVisible(true)}
      />

      <CustomDialogAlert
        visible={alertVisible}
        setVisible={setAlertVisible}
        cancelButton
        title={t('employeesView.alertTitleErrorDeleteUser')}
        description={t('employeesView.alertDescriptionErrorDeleteUser')}
        actionSuccess={setItemMustRemove}
      />
      <QrModal visible={visible} setVisible={setVisible} />
    </SafeAreaView>
  );
};

export default Employees;

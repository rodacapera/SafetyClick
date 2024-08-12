import CustomDialogAlert from '@src/components/customDialogAlert/CustomDialogAlert';
import CustomFab from '@src/components/customFab/CustomFab';
import CustomLoadingOverlay from '@src/components/customLoadingOverlay/CustomLoadingOverlay';
import {fakePosition} from '@src/globals/constants/fakeData';
import {
  mapStyleDark,
  mapStyleLight
} from '@src/globals/constants/mapsStylesMode';
import PanicButton from '@src/views/home/components/panicButton/PanicButton';

import {homeStyles} from '@src/views/home/styles/homeStyles';
import {t} from 'i18next';
import {useRef} from 'react';
import {BackHandler, Linking, Platform, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Portal, Snackbar, Text} from 'react-native-paper';
import {HomeHook} from '../../hooks/homeHook';
import {Configuration} from '@src/types/configuration';
import {APP_NAME} from '@src/globals/constants/config';

const CustomMap = () => {
  const mapRef = useRef<any>();

  const {
    region,
    animateCamera,
    panics,
    user,
    alertVisible,
    setAlertVisible,
    isLoading,
    onShare,
    appVersion,
    markerTitle,
    markerBody,
    currentMarkerIcon,
    panicsMarkerIcon,
    configuration,
    dark,
    colors,
    snackVisible,
    onDismissSnackBar,
    setSnackVisible,
    handleTracker,
    handleTrackerConfirm,
    isDataToAlertVisible,
    setIsDataToAlertVisible
  } = HomeHook();

  return isLoading ? (
    <CustomLoadingOverlay visible />
  ) : appVersion ? (
    <CustomDialogAlert
      visible
      title={t('update.updateTitle')}
      description={t('update.updateDescription')}
      setVisible={() =>
        Linking.openURL(
          Platform.OS == 'android'
            ? 'https://play.google.com/store/apps/details?id=io.cordova.carnegiehill.teranov&hl=es_CO&gl=US'
            : 'https://apps.apple.com/app/safetyclick/id6482998623'
        )
      }
      continueButton
    />
  ) : (
    <View style={homeStyles.container}>
      <CustomDialogAlert
        title={APP_NAME}
        description={t('home.descriptionAlertNavigation')}
        actionSuccess={handleTracker}
        visible={isDataToAlertVisible}
        setVisible={setIsDataToAlertVisible}
      />
      {region &&
      markerTitle &&
      markerBody &&
      currentMarkerIcon &&
      panicsMarkerIcon ? (
        <MapView
          ref={mapRef}
          userLocationAnnotationTitle={'Map'}
          provider={PROVIDER_GOOGLE}
          style={homeStyles.map}
          region={region ?? fakePosition}
          customMapStyle={dark ? mapStyleDark : mapStyleLight}>
          <Marker
            coordinate={region}
            title={markerTitle}
            description={markerBody}
            // image={currentMarkerIcon}
            style={{maxWidth: 400}}></Marker>
          {panics.map((marker, index) => {
            // const showMarker =
            //   marker.my_location.latitude != user?.location?.lat &&
            //   marker.my_location.longitude != user?.location?.lng;

            return (
              <Marker
                key={index + marker.title}
                coordinate={marker.my_location}
                title={marker.title}
                description={marker.body}
                image={panicsMarkerIcon}
                onPress={() =>
                  handleTrackerConfirm(marker.my_location, marker.title)
                }></Marker>
            );
          })}
        </MapView>
      ) : (
        <CustomLoadingOverlay visible />
      )}
      {configuration && user && user.group_number != '4314957548' && (
        <PanicButton
          user={user}
          configuration={configuration as Configuration}
          setSnackVisible={setSnackVisible}
        />
      )}
      {/* <CustomFab
        icon={'share-variant'}
        position={'bottomLeft'}
        onPress={onShare}
        style={{
          borderRadius: 80,
          backgroundColor: dark
            ? colors.onPrimaryContainer
            : colors.elevation.level4
        }}
        iconColor="black"
      /> */}

      <CustomFab
        icon={'target'}
        position={'bottomRight'}
        onPress={() => animateCamera(mapRef, region!, 1000)}
        style={{
          borderRadius: 80,
          backgroundColor: dark
            ? colors.onPrimaryContainer
            : colors.elevation.level4
        }}
        iconColor="black"
      />
      {user && (
        <Portal>
          <CustomFab
            icon={'phone-classic'}
            position={'topRight'}
            onPress={() => Linking.openURL(`tel:${configuration.emergency}`)}
            style={{
              shadowColor: 'transparent',
              elevation: 0,
              borderRadius: 80,
              backgroundColor: 'transparent'
            }}
            iconColor={
              dark ? colors.onPrimaryContainer : colors.onPrimaryContainer
            }
            children={
              <Text
                style={{
                  paddingTop: 15,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: dark ? 'white' : '#b40000'
                }}>
                911
              </Text>
            }
          />
        </Portal>
      )}

      <CustomDialogAlert
        visible={alertVisible}
        setVisible={setAlertVisible}
        cancelButton
        title={t('home.alertTitleExitApp')}
        description={t('home.alertDescriptionExitApp')}
        actionSuccess={() => BackHandler.exitApp()}
      />
      <Snackbar
        visible={snackVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: t('general.ok'),
          onPress: () => {
            // Do something
          }
        }}>
        {t('notifyView.notifySend')}
      </Snackbar>
    </View>
  );
};

export default CustomMap;

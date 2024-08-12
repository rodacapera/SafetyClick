import {Configuration} from '@src/types/configuration';
import {ResultLocations} from '@src/types/locationTypes';
import {useCallback, useEffect, useState} from 'react';
import {getConfigurationFirebase} from '../firebase/config/config';
import {getLocation} from '../locations/geocoderHook';
import {Platform} from 'react-native';
import {requestLocationPermission} from '../locations/permissionsHook';
import Geolocation from 'react-native-geolocation-service';
import {GetUserQuery} from '@src/reactQuery/userQuery';
import {getConfiguration} from './functions';

const Config = () => {
  const {data} = GetUserQuery();
  const [myCurrentLocation, setMyCurrentLocation] = useState<ResultLocations>();
  const [configuration, setConfiguration] = useState<Configuration>();

  const getGlobalConfig = useCallback(() => {
    myCurrentLocation &&
      getConfiguration({myCurrentLocation, setConfiguration});
  }, [myCurrentLocation]);

  const grantedPermissionAndroid = async () => {
    const granted = await requestLocationPermission();
    granted && getLocation(setMyCurrentLocation);
  };

  useEffect(() => {
    getGlobalConfig();
  }, [getGlobalConfig]);

  useEffect(() => {
    if (data?.user) {
      if (Platform.OS === 'android') {
        grantedPermissionAndroid();
      } else {
        Geolocation.requestAuthorization('whenInUse').then(() => {
          getLocation(setMyCurrentLocation);
        });
      }
    }
  }, [data]);

  return {...configuration};
};

export {Config};

import {ResultLocations} from '@src/types/locationTypes';
import {getConfigurationFirebase} from '../firebase/config/config';
import {Configuration} from '@src/types/configuration';

export const getConfiguration = ({
  myCurrentLocation,
  setConfiguration
}: {
  myCurrentLocation: ResultLocations;
  setConfiguration: (e: Configuration) => void;
}) => {
  const countryCode = myCurrentLocation?.country?.short_name;
  countryCode &&
    getConfigurationFirebase(countryCode)
      .then(querySnapshot => {
        querySnapshot.forEach(value => {
          const data = value.data() as Configuration;
          setConfiguration(data);
        });
      })
      .catch(err => {
        console.debug('errorGetConfigFirebase ', err);
      });
};

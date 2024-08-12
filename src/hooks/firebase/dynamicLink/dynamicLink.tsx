import {firebase} from '@react-native-firebase/auth';

export const getDynamicLinkFirebase = async (shop_id: string) => {
  const link = await firebase.dynamicLinks().buildLink({
    link: `https://safetyclick.com/dynamiclink/?view=Register&id_shop=${shop_id}`,
    domainUriPrefix: 'https://safetyclick.page.link',
    android: {
      packageName: 'io.cordova.carnegiehill.teranov',
      fallbackUrl:
        'https://play.google.com/store/apps/details?id=io.cordova.carnegiehill.teranov'
    },
    ios: {
      bundleId: 'io.cordova.carnegiehill.teranov',
      appStoreId: 'id1428944146',
      fallbackUrl: 'https://apps.apple.com/us/app/SafetyClick/id1428944146'
    }
  });

  return link;
};

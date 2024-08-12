import {Alert, Share} from 'react-native';

export const whatsapp = async (title: string, message: string) => {
  try {
    const result = await Share.share({
      title: title,
      message
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        console.debug('share', result.activityType);
      } else {
        // shared
        console.debug('share', result);
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      console.debug('dismissed');
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

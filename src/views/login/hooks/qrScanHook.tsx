import {useNavigation} from '@react-navigation/native';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {SetShopQuery} from '@src/reactQuery/userQuery';
import {StackNavigation} from '@src/types/globalTypes';
import {useEffect, useState} from 'react';
import {DimensionValue, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const QrScanHook = () => {
  const navigation = useNavigation<StackNavigation>();
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [shopId, setShopId] = useState<string | undefined>(undefined);
  SetShopQuery(shopId);

  const onSuccess = (e: {data: string}) => {
    const url = e.data.split('=')[6];
    const urlDecode = decodeURI(url);
    const shop_id = urlDecode.split('%3D')[2];
    setShopId(shop_id);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };

  const marker = (
    color: string,
    size: DimensionValue,
    borderLength: DimensionValue,
    thickness: number = 2,
    borderRadius: number = 0
  ): JSX.Element => {
    return (
      <View style={{height: size, width: size}}>
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            top: 0,
            left: 0,
            borderColor: color,
            borderTopWidth: thickness,
            borderLeftWidth: thickness,
            borderTopLeftRadius: borderRadius
          }}></View>
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            top: 0,
            right: 0,
            borderColor: color,
            borderTopWidth: thickness,
            borderRightWidth: thickness,
            borderTopRightRadius: borderRadius
          }}></View>
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            bottom: 0,
            left: 0,
            borderColor: color,
            borderBottomWidth: thickness,
            borderLeftWidth: thickness,
            borderBottomLeftRadius: borderRadius
          }}></View>
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            bottom: 0,
            right: 0,
            borderColor: color,
            borderBottomWidth: thickness,
            borderRightWidth: thickness,
            borderBottomRightRadius: borderRadius
          }}></View>
      </View>
    );
  };

  useEffect(() => {
    shopId &&
      navigation.replace('Register', {
        administrator: false,
        qr: true,
        shopId: shopId
      });
  }, [navigation, shopId]);

  useEffect(() => {
    HeaderShown({
      navigation,
      visible: false,
      transparent: false
    });
  }, [navigation]);

  return {onSuccess, flash, setFlash, marker};
};

export {QrScanHook};

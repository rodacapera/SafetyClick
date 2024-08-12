import {StackNavigation} from '@src/types/globalTypes';
type DrawerType = 'permanent' | 'front';

export const HeaderShown = ({
  navigation,
  visible,
  transparent,
  titleColor,
  width
}: {
  navigation: StackNavigation;
  visible: boolean;
  transparent: boolean;
  titleColor?: string;
  width?: number;
}) => {
  const type: DrawerType = width
    ? width >= 768
      ? 'permanent'
      : 'front'
    : 'front';

  navigation.getParent()?.setOptions({
    headerShown: visible,
    headerTransparent: transparent,
    headerTintColor: titleColor,
    drawerType: type,
    swipeEnabled: width ? true : false
  });
};

import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {ButtonsListProps} from '@src/types/globalTypes';
import {t} from 'i18next';
import {Fragment} from 'react';
import {ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import {buttonsListStyles} from './styles/buttonsList';

const ButtonsList = ({
  height = 400,
  width = 320,
  children
}: ButtonsListProps) => {
  const {colors} = ActualTheme();
  return (
    <Fragment>
      <Title style={[buttonsListStyles.title, {color: colors.onSurface}]}>
        {t('buttonsModal.title')}
      </Title>
      <ScrollView style={{height, width}}>{children}</ScrollView>
    </Fragment>
  );
};

export default ButtonsList;

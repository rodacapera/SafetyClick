import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {ItemCardProps} from '@src/types/removeItemTypes';
import {Fragment} from 'react';
import {TouchableOpacity} from 'react-native';
import {Avatar, Card, IconButton} from 'react-native-paper';
import CustomDialogAlert from '../customDialogAlert/CustomDialogAlert';
import {simpleRemoveItemCardsStyles} from './styles/simpleRemoveItemCards';

const SimpleRemoveItemCards = ({
  titleCard,
  subtitleCard,
  titleAlert,
  subtitleAlert,
  id,
  touchable = false,
  modalVisible = false,
  removeItem,
  setModalVisible = () => console.log('noting')
}: ItemCardProps) => {
  const {colors, theme, dark} = ActualTheme();
  return (
    <Fragment>
      {titleAlert && subtitleAlert && (
        <CustomDialogAlert
          title={titleAlert}
          description={subtitleAlert}
          setVisible={setModalVisible}
          visible={modalVisible}
        />
      )}
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => setModalVisible(true)}
        disabled={!touchable}>
        <Card.Title
          style={[
            simpleRemoveItemCardsStyles.container,
            {
              borderColor: dark ? colors.onSurface : colors.onSurfaceDisabled
            }
          ]}
          theme={theme}
          titleVariant="headlineSmall"
          titleStyle={{textTransform: 'capitalize', color: colors.onSurface}}
          title={titleCard}
          subtitle={subtitleCard}
          subtitleStyle={{textTransform: 'capitalize', color: colors.onSurface}}
          left={props => <Avatar.Icon {...props} icon="account-star" />}
          right={props =>
            removeItem ? (
              <IconButton
                {...props}
                icon={'delete'}
                iconColor={colors.onSurface}
                onPress={() => removeItem(id)}
              />
            ) : (
              <></>
            )
          }
        />
      </TouchableOpacity>
    </Fragment>
  );
};

export default SimpleRemoveItemCards;

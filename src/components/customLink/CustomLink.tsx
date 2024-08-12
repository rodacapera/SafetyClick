import {CustomLinkProps} from '@src/types/globalTypes';
import {Linking} from 'react-native';
import {Text} from 'react-native-paper';

const CustomLink = ({
  text,
  link,
  underline,
  color = 'blue'
}: CustomLinkProps) => {
  return (
    <Text
      style={{
        color: color,
        textDecorationLine: underline ? 'underline' : 'none'
      }}
      onPress={() => Linking.openURL(link)}>
      {text}
    </Text>
  );
};

export default CustomLink;

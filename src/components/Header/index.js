import { Image, Text, View } from 'react-native';
import styles from './styles';
import CameraSVG from '../../resources/assets/video-camera.svg';
import CallSVG from '../../resources/assets/call.svg';

const Header = ({ title, image }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.leftSection}>
        <Image
          source={{ uri: image }}
          style={styles.profile}
        />
        <Text style={styles.name}>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        <CameraSVG width={25} height={25} />
        <CallSVG />
      </View>
    </View>
  );
};
export default Header;

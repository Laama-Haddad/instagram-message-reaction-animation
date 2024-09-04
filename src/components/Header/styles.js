import { Platform, StatusBar, StyleSheet } from 'react-native';
import { WIDTH, HEIGHT } from '../../utils/constants';

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:
      Platform.OS === 'android'
        ? (StatusBar.currentHeight || 0) + HEIGHT * 0.01
        : HEIGHT * 0.05,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  profile: {
    width: WIDTH * 0.15,
    height: WIDTH * 0.15,
    borderRadius: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
});

export default styles;

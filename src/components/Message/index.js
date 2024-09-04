import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageMessage from '../ImageMessage';
import TextMessage from '../TextMessage';
import { USER_DATA } from '../../utils/constants';

const Message = (props) => {
  const { type, isSender, sender, onLongPress, onPressIn, ...rest } = props;
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPressIn={() => onPressIn(isSender)}
        onLongPress={(e) => onLongPress(e, { ...props })}
        style={{ marginTop: "5%" }}
      >
        <View style={[styles.container, isSender && styles.sender]}>
          {!isSender && <Image source={{ uri: USER_DATA.avatar }} style={styles.avatar} resizeMode='contain' />}
          {type === 'text' ? <TextMessage {...rest} isSender={isSender} /> : <ImageMessage {...rest} />}
        </View>
      </TouchableOpacity>
    </>

  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: 10
  },
  sender: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 24,
    height: 24,
    backgroundColor: '#eee',
    borderRadius: 15,
  },
  date: {
    marginTop: "5%",
    textAlign: "center",
    marginBottom: "3%"
  }
});

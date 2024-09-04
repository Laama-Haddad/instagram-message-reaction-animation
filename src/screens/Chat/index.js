import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Message from '../../components/Message';
import Header from '../../components/Header';
import { MESSAGES_DATA, USER_DATA } from '../../utils/constants';
import Portal from '../../components/Portal';

const Chat = () => {
  const [messageCordinates, setMessageCordinates] = useState({ x: 0, y: 0 });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isSender, setSender] = useState(false);

  const onLongPress = (e, message) => {
    console.log('onLongPress', e.nativeEvent);
    const { pageY, locationY, pageX, locationX } = e.nativeEvent;
    let y = pageY - locationY;
    let x = pageX - locationX;
    setMessageCordinates({
      x,
      y,
    });
    setSelectedMessage(message);
  };

  return (
    <View style={styles.container}>
      <Header title={USER_DATA.name} image={USER_DATA.avatar} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: '5%' }}
        data={MESSAGES_DATA}
        keyExtractor={item => item.createdAt}
        renderItem={({ item }) => (
          <Message {...item} onLongPress={onLongPress} onPressIn={setSender} />
        )}
      />
      <Portal
        selectedMessage={selectedMessage}
        messageCordinates={messageCordinates}
        setSelectedMessage={setSelectedMessage}
        isSender={isSender}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
});

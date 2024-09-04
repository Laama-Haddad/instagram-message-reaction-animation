import { View, StyleSheet, Image } from 'react-native';
import React from 'react';


const ImageMessage = ({ content }) => {
  return (
    <View pointerEvents="none" style={styles.container}>
      <Image source={{ uri: content.imageURL }} style={styles.image} />
    </View>
  );
};

export default ImageMessage;

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    alignItems: 'flex-start',
  },
  image: {
    width: 160,
    borderRadius: 16,
    backgroundColor: '#eee',
    height: 220,
  },
});
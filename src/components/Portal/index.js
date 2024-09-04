import {
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TextMessage from '../TextMessage';
import ImageMessage from '../ImageMessage';
import { HEIGHT } from '../../utils/constants';

const Portal = ({
  selectedMessage, messageCordinates, setSelectedMessage, isSender
}) => {

  const scale = useState(new Animated.Value(0))[0]; // Start with 0
  const backgroundColorOpacity = useState(new Animated.Value(1))[0];

  useEffect(() => {

    if (selectedMessage) {

      /** ---------------   Reaction Animation --------------- */
      scale.setValue(0);
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }).start();

      /** --------------- Background Animation --------------- */
      Animated.timing(backgroundColorOpacity, {
        toValue: 0.4, // Target opacity
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: false, // Use native driver for non-transform animations
      }).start();
    }

  }, [selectedMessage]);

  const animatedBackgroundColor = backgroundColorOpacity.interpolate({
    inputRange: [0.4, 1],
    outputRange: ['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 1)']
  });

  const textStyle = {
    transform: [
      {
        scale: scale,
      },
      {
        translateY: scale.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  if (!selectedMessage) return null;

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: animatedBackgroundColor, paddingHorizontal: "5%" }]}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setSelectedMessage(null)}
        activeOpacity={1}
      >
        <Animated.View style={[styles.reaction, { top: selectedMessage?.type === 'text' ? messageCordinates?.y - HEIGHT * 0.01 : messageCordinates?.y + HEIGHT * 0.04 }]}>
          <Animated.Text style={[styles.emoji, textStyle]}>❤️</Animated.Text>
          <Animated.Text style={[styles.emoji, textStyle]}>👍</Animated.Text>
          <Animated.Text style={[styles.emoji, textStyle]}>😀</Animated.Text>
          <Animated.Text style={[styles.emoji, textStyle]}>😂</Animated.Text>
          <Animated.Text style={[styles.emoji, textStyle]}>😍</Animated.Text>
          <Animated.Text style={[styles.emoji, textStyle]}>😡</Animated.Text>
          <Animated.Text style={[styles.emoji, textStyle]}>➕</Animated.Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.messageStyle,
            {
              top: messageCordinates?.y,

              right: isSender ? 2 : undefined,
              left: isSender ? undefined : messageCordinates?.x + 15,
            },
          ]}
        >
          {selectedMessage?.type === 'text' ? (
            <TextMessage {...selectedMessage} />
          ) : (
            <ImageMessage {...selectedMessage} />
          )}
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Portal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageStyle: {
    position: 'absolute',
  },
  reaction: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 8,
    zIndex: 1
  },
  emoji: {
    fontSize: 35,
  },
});

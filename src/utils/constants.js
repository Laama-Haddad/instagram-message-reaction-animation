import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const USER_DATA = {
  name: 'Jimee Morfort',
  avatar: 'https://i.postimg.cc/BZypXp9s/Image.png0',
};
export const MESSAGES_DATA = [
  {
    type: 'text',
    content: {
      text: 'Hello',
    },
    isSender: false,
    createdAt: '2023-06-01T09:00:00Z',
  },
  {
    type: 'text',
    content: {
      text: 'Hey, how are you?',
    },
    isSender: true,
    createdAt: '2023-06-01T09:05:00Z',
  },
  {
    type: 'text',
    content: {
      text: 'What do you think?',
    },
    isSender: true,
    createdAt: '2023-06-01T09:10:00Z',
  },
  {
    type: 'image',
    content: {
      imageURL: 'https://i.postimg.cc/QxcWqkPp/download-1.jpg',
    },
    isSender: false,
    createdAt: '2023-06-01T09:15:00Z',
  },
  {
    type: 'text',
    content: {
      text: 'I think this place is better',
    },
    isSender: true,
    createdAt: '2023-06-01T09:20:00Z',
  },
  {
    type: 'image',
    content: {
      imageURL: 'https://i.postimg.cc/9QpR6Xc0/download-2.jpg',
    },
    isSender: true,
    createdAt: '2023-06-01T09:25:00Z',
  },
  {
    type: 'text',
    content: {
      text: "It doesn't matter",
    },
    isSender: false,
    createdAt: '2023-06-01T09:30:00Z',
  },
  {
    type: 'text',
    content: {
      text: 'Are you still available to go?',
    },
    isSender: false,
    createdAt: '2023-06-01T09:35:00Z',
  },
  {
    type: 'image',
    content: {
      imageURL: 'https://i.postimg.cc/VvQkS2z2/download-3.jpg',
    },
    isSender: false,
    createdAt: '2023-06-01T09:40:00Z',
  },
  {
    type: 'text',
    content: {
      text: 'I know this place, it’s nearby. We can visit both.',
    },
    isSender: true,
    createdAt: '2023-06-01T09:45:00Z',
  },
  {
    type: 'text',
    content: {
      text: 'Great! See you on Sunday.',
    },
    isSender: false,
    createdAt: '2023-06-01T09:50:00Z',
  },
  {
    type: 'text',
    content: {
      text: "Can't wait!",
    },
    isSender: true,
    createdAt: '2023-06-01T09:55:00Z',
  },
];

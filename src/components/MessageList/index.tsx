import React from 'react';

import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){

  const message = { 
    id: '1',
    text: 'message the test',
    user: {
      name: 'user',
      avatar_url: 'https://github.com/kesleydavid.png',
    }
  }
  return (
    <ScrollView
      style={ styles.container }
      contentContainerStyle={ styles.content }
      // close keyboard automatic
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
import React from 'react';

import { View } from 'react-native';

import { Button } from '../Button';

import { COLORS } from '../../theme';
import { styles } from './styles';

export function SignInBox(){
  return (
    <View style={ styles.container }>
      <Button
        title="SignIn with Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        isLoading={false}
      />
    </View>
  );
}
import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg'

import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
        <UserPhoto imageUri='https://github.com/kesleydavid.png' />
      </View>
    </View>
  );
}
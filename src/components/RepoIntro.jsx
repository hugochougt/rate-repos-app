import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
  },
  fullName: {
    color: theme.colors.textPrimary,
    fontWeight: 'bold'
  },
  description: {
    color: theme.colors.textSecondary,
    marginTop: 6,
    marginBottom: 6,
  },
  language: {
    color: theme.colors.textWhite,
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
  },
});

const RepoIntro = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{ item.fullName }</Text>
      <Text color="textSecondary" style={styles.description}>{ item.description }</Text>
      <Text style={styles.language}>{ item.language }</Text>
    </View>
  );
};

export default RepoIntro;

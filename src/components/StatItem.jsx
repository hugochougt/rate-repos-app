import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 4,
    textAlign: 'center',
  },
});

const formatNumber = number => {
  if (number < 1000) {
    return number;
  } else {
    return (number / 1000).toFixed(1) + 'k';
  }
};

const StatItem = ({ name, number }) => {
  return (
    <View style={styles.container}>
      <Text color="textPrimary" fontWeight="bold" style={styles.text}>{ formatNumber(number) }</Text>
      <Text color="textSecondary" style={styles.text}>{ name }</Text>
    </View>
  );
};

export default StatItem;

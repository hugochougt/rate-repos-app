import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatItem from './StatItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepoStatistics = ({ item }) => {
  return (
    <View style={styles.container}>
      <StatItem name="Stars" number={item.stargazersCount} />
      <StatItem name="Forks" number={item.forksCount} />
      <StatItem name="Reviews" number={item.reviewCount} />
      <StatItem name="Rating" number={item.ratingAverage} />
    </View>
  );
};

export default RepoStatistics;

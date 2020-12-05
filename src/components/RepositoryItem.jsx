import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RepoIntro from './RepoIntro';
import RepoStatistics from './RepoStatistics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  info: {
    flexDirection: 'row',
    padding: 14,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 6
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source = {{uri: item.ownerAvatarUrl}} style={styles.avatar} />
        <RepoIntro item={item} />
      </View>
      <RepoStatistics item={item} />
    </View>
  );
};

export default RepositoryItem;

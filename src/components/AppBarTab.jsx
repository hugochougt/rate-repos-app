import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';

const styles = StyleSheet.create({
  textColor: {
    color: theme.colors.textWhite,
    margin: 10,
  },
});

const AppBarTab = ({ text, path }) => {
  return (
    <Link to={path}><Text style={styles.textColor}>{ text }</Text></Link>
  );
};

export default AppBarTab;

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
const colorScheme = useColorScheme();

const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
const themeContainerStyle = 
colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>Color Scheme: {colorScheme}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40'
  },
  lightThemeText: {
    color: '#242c40'
  },
  darkThemeText: {
    color: '#d0d0c0'
  },
});

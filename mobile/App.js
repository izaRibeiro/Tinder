import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
      <Text style={styles.hello}>Hello World</Text>
  );
}

const styles = StyleSheet.create({
  hello: {
      flex: 1,
      textAlign: "center",
      fontSize: 50,
      position: "relative",
      top: 300
  }
})
import {View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    //View component to create a container for the content
    <View style={styles.container}>
      {/* three Text components to display the name, degree program and School */}
      <Text>Likhitha Lakshmi Gudivada</Text>
      <Text>MSCS</Text>
      <Text>City University Of Seattle</Text>
    </View>
  );
}

// StyleSheet to define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});

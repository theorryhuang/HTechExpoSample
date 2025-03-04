import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import FetchButton from "../../components/FetchButton";

const IndexScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FetchButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,           // Ensures it takes the full screen
    backgroundColor: "#ffffff", // White background
    alignItems: "center", // Optional: Center contents
    justifyContent: "center", // Optional: Center vertically
  },
});

export default IndexScreen;

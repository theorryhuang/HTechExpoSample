import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, Alert, StyleSheet } from "react-native";
import Constants from "expo-constants";

// Use API URL from environment variable
const API_URL = Constants.expoConfig?.extra?.API_URL || "http://localhost:3000";

const FetchButton: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/data`);
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      Alert.alert("Error", "Could not fetch data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={handleFetch} disabled={loading} />
      {loading && <ActivityIndicator size="large" color="blue" />}
      {data && <Text style={styles.text}>{data}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FetchButton;

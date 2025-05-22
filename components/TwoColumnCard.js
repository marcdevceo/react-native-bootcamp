import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TwoColumnCard = () => {
  return (
    <View style={{ flexDirection: "row", margin: 16, borderRadius: 10, overflow: "hidden" }}>
      <View style={{ flex: 1, backgroundColor: "red", padding: 20, alignItems: "center", justifyContent: "center"}}>
        <Text>TwoColumnCard</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "orange", padding: 20, alignItems: "center", justifyContent: "center"}}>
        <Text>TwoColumnCard</Text>
      </View>
    </View>
  );
};

export default TwoColumnCard;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TwoColumnCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.columnLeft}>
        <Text style={styles.text}>TwoColumnCard</Text>
      </View>
      <View style={styles.columnRight}>
        <Text style={styles.text}>TwoColumnCard</Text>
      </View>
    </View>
  );
};

export default TwoColumnCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        margin: 16, 
        borderRadius: 10, 
        overflow: "hidden"
    },
    columnLeft: {
        flex: 1, 
        backgroundColor: "red", 
        padding: 20, 
        alignItems: "center", 
        justifyContent: "center"
    },
    columnRight: {
        flex: 1, 
        backgroundColor: "orange", 
        padding: 20, 
        alignItems: "center", 
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 16
    }
});

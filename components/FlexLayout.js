import { View, Text, StyleSheet, ScrollView } from "react-native";
import QuoteCard from "./QuoteCard";

export default function FlexLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <ScrollView style={styles.body}>
        <QuoteCard
          quote="You might have problems, but your problems don’t have you."
          author="James Fortune"
        />
        <QuoteCard
          quote="You might have problems, but your problems don’t have you."
          author="James Fortune"
        />
        <QuoteCard
          quote="You might have problems, but your problems don’t have you."
          author="James Fortune"
        />
        <QuoteCard
          quote="You might have problems, but your problems don’t have you."
          author="James Fortune"
        />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  header: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 4,
    backgroundColor: "red",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: "#ffa07a",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

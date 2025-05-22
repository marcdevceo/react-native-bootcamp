import { View, Text, StyleSheet, Button } from "react-native";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.logo}>Vibe🔗Sync</Text>
      </View>
      <View style={styles.messageArea}>
        <Text style={styles.heading}>Welcome to VibeSync</Text>
        <Text style={styles.subheading}>
          Find your Tribe to catch the Vibes
        </Text>
      </View>
      <View style={styles.buttonArea}>
        <Button title="Get Started" onPress={() => {}} />
        <Text style={styles.link}>Already have an account? Log In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },
  logoArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
  messageArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  subheading: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 12,
    color: "lightblue",
  },
});

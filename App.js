import { StyleSheet, StatusBar, View, Platform } from "react-native";
import ProfileCard from "./components/ProfileCard";
import QuoteCard from "./components/QuoteCard";
import TwoColumnCard from "./components/TwoColumnCard";
import FlexLayout from "./components/FlexLayout";
import Onboarding from "./components/Onboarding";

export default function App() {
  return (
    <View style={styles.container}>      
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    backgroundColor: "black",
  }
})
import { StyleSheet, StatusBar, View, Platform } from "react-native";
import ProfileCard from "./components/ProfileCard";
import QuoteCard from "./components/QuoteCard";
import TwoColumnCard from "./components/TwoColumnCard";
import FlexLayout from "./components/FlexLayout";

export default function App() {
  return (
 <View style={styles.container}>      
      <ProfileCard
        name="Marcus Kimber"
        role="React Native Dev in Training"
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <QuoteCard
        quote="You might have problems, but your problems don’t have you."
        author="James Fortune"
      />
      <TwoColumnCard />
      <FlexLayout />
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
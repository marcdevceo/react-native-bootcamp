import { View } from "react-native";
import ProfileCard from "./components/ProfileCard";
import QuoteCard from "./components/QuoteCard";

export default function App() {
  return (
    <View style={{ paddingTop: 50 }}>
      <ProfileCard
        name="Marcus Kimber"
        role="React Native Dev in Training"
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <QuoteCard
        quote="You might have problems, but your problems don’t have you."
        author="James Fortune"
      />
    </View>
  );
}



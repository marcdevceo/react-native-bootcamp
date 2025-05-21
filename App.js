import { View } from 'react-native';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <View style={{ paddingTop: 50 }}>
      <ProfileCard
        name="Marcus Kimber"
        role="React Native Dev in Training"
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
    </View>
  );
}


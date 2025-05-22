import { View, Text, StyleSheet } from 'react-native';

export default function QuoteCard({ quote, author }) {
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>“{quote}”</Text>
      <Text style={styles.author}>— {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 12,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 10,
  },
  author: {
    textAlign: 'right',
    fontSize: 16,
    color: '#555',
  },
});

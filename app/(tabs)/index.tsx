import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';

import { Text, View } from "../../components/Themed";
import Tweet from "../../components/Tweet";

import tweets from "../../assets/data/tweets";
import { Link } from "expo-router";
const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Link href="/new-tweet" asChild>
        <Pressable style={styles.floatingButton}>
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  floatingButton: {
    backgroundColor: '#1D9BF0',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

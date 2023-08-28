import { StyleSheet, Image } from "react-native";

import { Text, View } from "./Themed";
import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <View style={styles.twitContainer}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  twitContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey'
  },
  mainContainer: {
    marginLeft: 15,
    flex: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: '500',
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

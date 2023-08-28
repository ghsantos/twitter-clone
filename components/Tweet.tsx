import React from "react";
import { StyleSheet, Image } from "react-native";
import { Entypo } from '@expo/vector-icons'

import { Text, View } from "./Themed";
import IconButton from "./IconButton";
import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <View style={styles.twitContainer}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username} · 2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: 'auto' }}
          />
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
        
        {!!tweet.image && (
          <Image src={tweet.image} style={styles.image} />
        )}

        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple" />
        </View>
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
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 10,
    marginVertical: 10,
    borderRadius: 12,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});

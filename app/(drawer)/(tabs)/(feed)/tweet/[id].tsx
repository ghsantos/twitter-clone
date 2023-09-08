import React from 'react'
import { useGlobalSearchParams } from 'expo-router'

import { Text } from '../../../../../components/Themed'
import tweets from '../../../../../assets/data/tweets'
import Tweet from '../../../../../components/Tweet'

export default function TweetScreen() {
  const { id } = useGlobalSearchParams()
  const tweet = tweets.find(t => t.id === id)

  if (!tweet) {
    return <Text>Tweet not found!</Text>
  }

  return <Tweet tweet={tweet} />
}

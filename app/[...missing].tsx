import React from 'react'
import { Link, Stack, usePathname } from 'expo-router'
import { StyleSheet } from 'react-native'
import { createURL } from 'expo-linking'

import { Text, View } from '../components/Themed'

export default function NotFoundScreen() {
  const pathname = usePathname()
  const url = createURL(pathname)

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <Text style={styles.title}>{url}</Text>
        <Text style={styles.title}>{pathname}</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
        <Link href="/_sitemap" replace style={styles.link}>
          <Text style={styles.linkText}>Sitemap</Text>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})

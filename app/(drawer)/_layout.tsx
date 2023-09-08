import React from 'react'
import { Image, View } from 'react-native'
import { withLayoutContext } from 'expo-router'
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { Text } from '../../components/Themed'

const DrawerNavigator = createDrawerNavigator().Navigator

const Drawer = withLayoutContext(DrawerNavigator)

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 12 }}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
          }}
          style={{ width: 44, height: 44, borderRadius: 44 }}
        />
        <Text>User name</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Drawer.Screen name="bookmarks" options={{ title: 'Bookmarks' }} />
      <Drawer.Screen name="twitter-blue" options={{ title: 'Twitter Blue' }} />
    </Drawer>
  )
}

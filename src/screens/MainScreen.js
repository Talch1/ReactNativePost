import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import { DATA } from "../data";
import { Post } from "../componets/Post";
import { AppHeaderIcons } from '../componets/AppHeaderIcons';

export const MainScreen = ({ navigation }) => {
  const openHendler = (post) => {
    navigation.navigate("Post", {postId : post.id,date:post.date,booked:post.booked});
  };
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => <Post post={item} onOpen={openHendler} />}
        />
      </View>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "My blog",
headerRight:<HeaderButtons
HeaderButtonComponent={AppHeaderIcons}>
<Item title = "take photo" iconName = "ios-camera" 
onPress=  {()=>console.log("press photo")}/>
</HeaderButtons>,

headerLeft:<HeaderButtons
HeaderButtonComponent={AppHeaderIcons}>
<Item title = "menu" iconName = "ios-menu" 
onPress=  {()=>console.log("press photo")}/>
</HeaderButtons>
}
const styles = StyleSheet.create({
  wrap: {
    padding: 10,
  },
});

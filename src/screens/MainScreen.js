import React from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { DATA } from "../data";
import { Post } from "../componets/Post";

export const MainScreen = ({ navigation }) => {
  const openHendler = (post) => {
    navigation.navigate("Post", {postId : post.id,date:post.date});
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
};
const styles = StyleSheet.create({
  wrap: {
    padding: 10,
  },
});

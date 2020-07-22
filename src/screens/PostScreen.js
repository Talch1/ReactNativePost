import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../THEME";

const removeHendler = () => {
 // Works on both Android and iOS
Alert.alert(
  'Delete post',
  'Are you shore???',
  [
    
    {
      text: 'Cancel',
      style: 'cancel'
    },
    { text: 'OK', onPress: () => {} }
  ],
  { cancelable: false }
);
}

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((f) => f.id === postId);
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.imageS} />
      <View style={styles.wrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHendler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const date = navigation.getParam("date");
  return {
    headerTitle:
      `My Post number ` + postId + " " + new Date(date).toLocaleDateString(),
  };
};

const styles = StyleSheet.create({
  imageS: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  wrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-bold",
  },
});

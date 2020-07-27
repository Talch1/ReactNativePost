import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  Alert,
} from "react-native";
import { AppHeaderIcons } from "../componets/AppHeaderIcons";
import { DATA } from "../data";
import { THEME } from "../THEME";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const removeHendler = () => {
  // Works on both Android and iOS
  Alert.alert(
    "Delete post",
    "Are you shore???",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => {} },
    ],
    { cancelable: false }
  );
};

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const post = DATA.find((f) => f.id === postId);

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked });
  // }, [])
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
  const booked = navigation.getParam("booked");
  const postId = navigation.getParam("postId");
  const date = navigation.getParam("date");
  const iconNameNow = booked?'ios-star': "ios-star-outline"
  return {
    headerTitle:
      `My Post number ` + postId + " " + new Date(date).toLocaleDateString(),
      headerRight:<HeaderButtons
        HeaderButtonComponent={AppHeaderIcons}>
        <Item title = "star" iconName = {iconNameNow}
        onPress=  {()=>console.log("press photo")}/>
        </HeaderButtons>
  }
}


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

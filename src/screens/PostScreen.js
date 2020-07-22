import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

export const PostScreen = ({navigation})=> {

  const postId = navigation.getParam('postId')
  return (  
    <View style={styles.center}>
      <Text>{postId}</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({navigation})=>{
  const postId = navigation.getParam('postId')
  const date = navigation.getParam('date')
  return{
    headerTitle: `My Post number `+ postId + " " + new Date(date).toLocaleDateString()
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

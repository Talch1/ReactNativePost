import React from "react";
import { View, StyleSheet, ImageBackground, Text,TouchableOpacity } from "react-native";


export const Post = ({ post ,onOpen}) => {
  return (
    <TouchableOpacity activeOpacity ={0.7} onPress = {()=>{
      {onOpen(post)}
    }}>
    <View style={styles.post}>
      <ImageBackground source={{ uri: post.img }}
      
      style={styles.imageS}>
        <View style={styles.textWr}>
          <Text style={styles.textS}>{new Date(post.date).toLocaleDateString() }</Text>
        </View>
      </ImageBackground>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  imageS: {
    width: "100%",
    height: 200,
  },
  textWr: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  textS: {
    color: "#fff",
    fontFamily: "open-reg",
  },
});

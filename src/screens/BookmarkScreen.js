import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const BookmarkScreen = () => {

    return  <View style= {styles.center} >
    <Text >BookmarkScreen</Text>
  </View>
}

const styles = StyleSheet.create({

    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
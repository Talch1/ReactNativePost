import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const CreateScreen = () => {

    return  <View style= {styles.center} >
    <Text >CreateScreen</Text>
  </View>
}

const styles = StyleSheet.create({

    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
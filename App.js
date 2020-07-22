import React,{ useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import {AppNavigation} from './src/navigation/AppNavigation';


export default function App() {
  const [isRedy, setIsRedy] = useState(false)

  if(!isRedy){
    return (
      <View>
        <AppLoading
        startAsync= {bootstrap}
         onFinish = {()=>setIsRedy(true)}
         onError= {err=> console.log(err)} />
      </View>
    )
  }
  return (
   <AppNavigation/>
  );
}


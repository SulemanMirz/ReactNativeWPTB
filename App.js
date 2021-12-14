import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Platform } from 'react-native'

import { MyContext } from './src/context'

import StageOne from './src/components/stageOne';
import StageTwo from './src/components/stageTwo';

class App extends Component {
  static contextType = MyContext
  render() {
    return (
      <ScrollView style={{backgroundColor:'#d3d3d3'}} >  
        <View style={styles.container} >
          { this.context.state.stage === 1 ?
              <StageOne/>
              :
              <StageTwo/>
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 80 : 30,
    width:'100%',
    height:'100%' 
  },
})

export default App
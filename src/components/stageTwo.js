import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { MyContext } from '../context'
import { MainLogo } from '../utils/tools'

const StageTwo = () => {
    const context = useContext(MyContext)
    return (
        <View>
            <MainLogo/>
            <Text style={{fontSize:25, fontWeight:'bold'}} >The looser is: </Text>
            <Text style={styles.looserWrapper}>
                {context.state.result}
            </Text>
            <Button
                buttonStyle={styles.button}
                title='Try Again'
                onPress={()=> context.getNewLooser()}
            />
            <Button
                buttonStyle={styles.button}
                title='Reset Game'
                onPress={()=> context.resetGame()}
            />
        </View>
    )
}

export default StageTwo

const styles = StyleSheet.create({
    looserWrapper:{
        fontSize:30,
        marginTop:20,
        fontWeight:'bold',
    },
    button: {
        backgroundColor: '#41b6e6',
        marginTop:20
    },
})

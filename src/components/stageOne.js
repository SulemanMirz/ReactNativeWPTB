import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Button, Text, ListItem } from 'react-native-elements'
import { MyContext, MyContextProvider } from '../context'

import { MainLogo } from '../utils/tools'

const StageOne = () => {

    const context = useContext(MyContext)

    const renderPlayers = () => (
        context.state.players.map((item,index)=>(
            <ListItem
                key={index}
                bottomDivider
                style={{width:'100%'}}
                onLongPress={()=> context.removePlayer(index) }
            >
                <ListItem.Chevron/>
                <ListItem.Content>
                    <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ))
    )

    return (
        <>
            <Formik
                initialValues={{player:''}}
                validationSchema={Yup.object({
                    player: Yup.string()
                        .min(3,'minimum 3 characters')
                        .max(15,'maximum 15 characters')
                        .required('Name is required')
                })}
                onSubmit={(values,{ resetForm })=> {
                    context.addPlayer(values.player)
                    console.log(context.state.players);
                    resetForm()

                }}
            >
                { ({ handleBlur, handleChange,handleSubmit,values,touched,errors }) => (
                    <>
                    <MainLogo/>
                    <Input
                        placeholder={'Add name here'}
                        leftIcon={{type:'antdesign', name:'adduser'}}
                        inputContainerStyle={{
                            marginHorizontal: 50,
                            marginTop: 50
                        }}
                        renderErrorMessage={errors.player && touched.player}
                        errorMessage={errors.player}
                        errorStyle={{
                            marginHorizontal: 50
                        }}
                        

                        onChangeText={handleChange('player')}
                        onBlur={handleBlur('player')}
                        value={values.player}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title='Add Player'
                        onPress={handleSubmit}
                    />
                    </>
                )}
            </Formik>
            <View style={{padding:20, width:'100%'}} >
                {
                    context.state.players && context.state.players.length > 0 ?
                    <>
                        <Text>List of players: </Text>
                        {renderPlayers()}
                        <Button
                            buttonStyle={styles.button}
                            title={'Get the looser'}
                            onPress={()=>context.next()}
                        />
                    </>
                    :
                    null
                }
            </View>
        </>
    )
}

export default StageOne

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#db3eb1',
        marginTop:20
    },
})

import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'

export default AddNote = () => {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const addNote = async () => {
        Keyboard.dismiss();
        await firebase.firestore().collection('notes').add({
            title: title,
            note: note,
        })
        .then(()=>{
            ToastAndroid.show('Notes Added Successfully', ToastAndroid.SHORT)
        });
        setTitle('')
        setNote('')
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Title'
                style={styles.editTitle}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                placeholder='Note'
                style={styles.editNote}
                value={note}
                onChangeText={(text) => setNote(text)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={addNote}
            >
                <Text style={styles.appButtonText}>Save Notes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#f7d6aa',
    },
    editTitle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#efe9ae',
        borderRadius: 10,
        borderColor: '#ff9f86',
        color: 'black',
    },
    editNote: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#efe9ae',
        borderRadius: 10,
        borderColor: '#ff9f86',
        color: 'black',
    },
    button: {
        elevation: 8,
        marginTop:50,
        marginHorizontal: 12,
        backgroundColor: "#ff9f86",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: 'capitalize'
    },
})
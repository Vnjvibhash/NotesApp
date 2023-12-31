import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'

export default EditNote = (props) => {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')

    useEffect(() => {
        setTitle(props.route.params.item.title)
        setNote(props.route.params.item.note)
    });

    const updateNote = async () => {
        Keyboard.dismiss();
        await firebase.firestore().collection('notes').doc(props.route.params.item.id).update({
            title: title,
            note: note,
        })
        .then(()=>{
            ToastAndroid.show('Notes Updated Successfully', ToastAndroid.SHORT)
        });
        setTitle('')
        setNote('')
    }

    const deleteNote = async () =>{
        await firebase.firestore().collection('notes').doc(props.route.params.item.id).delete()
        .then(()=>{
            ToastAndroid.show('Notes Deleted Successfully', ToastAndroid.SHORT)
            props.navigation.navigate("Home")
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
                style={styles.updateButton}
                onPress={updateNote}
            >
                <Text style={styles.appButtonText}>Update Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={deleteNote}
            >
                <Text style={styles.appButtonText}>Delete Notes</Text>
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
        color: '#000000',
    },
    editNote: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#efe9ae',
        borderRadius: 10,
        borderColor: '#ff9f86',
        color: '#000000',
    },
    updateButton: {
        elevation: 8,
        marginTop: 50,
        marginHorizontal: 12,
        backgroundColor: "#abde89",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    deleteButton: {
        elevation: 8,
        marginTop: 50,
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
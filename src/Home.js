import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import { firebase } from '../config'

export default function Home() {
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        firebase.firestore()
            .collection('notes')
            .onSnapshot((querySnapshot) => {
                const newNotes = [];
                querySnapshot.forEach((doc) => {
                    const { note, title } = doc.data()
                    newNotes.push({
                        id: doc.id,
                        note,
                        title
                    })
                });
                setNotes(newNotes);
            })
    });
    return (
        <View style={styles.container}>
            <FlashList
                data={notes}
                numColumns={2}
                estimatedItemSize={100}
                renderItem={({ item }) => (
                    <View style={styles.noteView}>
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.noteDesc}>
                            {item.note}
                        </Text>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AddNote')}
            >
                <Text style={styles.appButtonText}>Add Notes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#ffe9ce',
    },
    noteView: {
        padding: 8,
        backgroundColor: '#ffc8dd',
        borderRadius: 12,
        margin: 4,
        height: 150,
    },
    noteTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#e50457',
    },
    noteDesc: {
        fontSize: 15,
        color: '#ff4081',
        marginTop: 8,
    },
    button: {
        elevation: 8,
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
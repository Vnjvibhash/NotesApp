import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import { firebase } from '../config'

export default function Home() {
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    });

    getData = async () => {
        const snapshot = await firebase.firestore().collection('notes').get();
        const notes = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setIsLoading(false)
        setNotes(notes);
    }
    return (
        <View style={styles.container}>
            {isLoading ? (<ActivityIndicator size="large" color="#00ff00" />) : (
                <FlashList
                    data={notes}
                    numColumns={2}
                    estimatedItemSize={100}
                    renderItem={({ item }) => (
                        <View style={styles.noteView}>
                            <Pressable onPress={() => navigation.navigate('EditNote', { item })}>
                                <Text style={styles.noteTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.noteDesc}>
                                    {item.note}
                                </Text>
                            </Pressable>
                        </View>
                    )}
                />
                // <FlatList
                //     numColumns={2}
                //     showsVerticalScrollIndicator={false}
                //     showsHorizontalScrollIndicator={false}
                //     data={notes}
                //     renderItem={({ item, index }) => {
                //         <View style={styles.noteView}>
                //             <Text style={styles.noteTitle}>
                //                 {item.title}
                //             </Text>
                //             <Text style={styles.noteDesc}>
                //                 {item.note}
                //             </Text>
                //         </View>
                //     }}
                // />
            )}
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
        alignContent: 'center',
        justifyContent: 'center',
    },
    noteView: {
        padding: 8,
        backgroundColor: '#ffc8dd',
        borderRadius: 12,
        margin: 4,
        flex: 1,
        alignItems: 'center',
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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default Header = (props) => {
  return (
    <View>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        padding: 12,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
    },
})
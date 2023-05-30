import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const YelloDow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.eyes}>
        <Text style={styles.eyeText}>.</Text>
        <Text style={styles.eyeText}>.</Text>
      </View>
      <Text style={styles.Mouth}>-</Text>
    </View>
  )
}

export default YelloDow
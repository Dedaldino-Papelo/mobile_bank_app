import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Ballance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>Ballance</Text>
      <Text style={styles.ballance}>Kz 2.000.000</Text>
    </View>
  )
}

export default Ballance
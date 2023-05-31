import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'

const MovementTypes = ({items}) => {
  const { type,src } = items
  return (
      <View style={styles.boxWrapper}>
        <View style={styles.boxItem}>
            <Image style={{width: 22, height: 22}} source={src} />
        </View>
        <Text style={styles.boxTitle}>{type}</Text>
      </View>
  )
}

export default MovementTypes
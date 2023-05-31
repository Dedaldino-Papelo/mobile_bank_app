import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.TextButton}>Log out</Text>
      </TouchableOpacity>
  )
}

export default Button
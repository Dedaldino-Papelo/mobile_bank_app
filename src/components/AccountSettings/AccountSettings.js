import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../Button/Button';

const AccountSettings = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <View style={styles.accountType}>
        <Text style={styles.text}>Account</Text>
        <AntDesign style={styles.icon} name="right" size={15} color="black" />
      </View>
      <View style={styles.accountType}>
        <Text style={styles.text}>Debit Card Setting</Text>
        <AntDesign style={styles.icon} name="right" size={15} color="black" />
      </View>
      <View style={styles.accountType}>
        <Text style={styles.text}>Security</Text>
        <AntDesign style={styles.icon} name="right" size={15} color="black" />
      </View>
      <View style={styles.accountType}>
        <Text style={styles.text}>Language</Text>
        <AntDesign style={styles.icon} name="right" size={15} color="black" />
      </View>
      <View style={styles.accountType}>
        <Text style={styles.text}>FAQ</Text>
        <AntDesign style={styles.icon} name="right" size={15} color="black" />
      </View>
      <View style={styles.accountType}>
        <Text style={styles.text}>Help Center</Text>
        <AntDesign style={styles.icon} name="right" size={15} color="#2B2DE2" />
      </View>
      <Button />
      </View>
    </ScrollView>
  )
}

export default AccountSettings
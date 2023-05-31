import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import AccountSettings from '../../components/AccountSettings/AccountSettings'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <View style={styles.header}>
            <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={24} color="black" />
            <Text style={styles.headertext}>Profile</Text>
        </View>
        <ProfileCard />
      </View>
      <AccountSettings />
    </View>
  )
}

export default Profile
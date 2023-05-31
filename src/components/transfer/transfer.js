import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import transfer from '../../transfer'
import TransferList from '../transferList/transferList'

const Transfer = () => {
  return (
    <View style={{flexDirection: "column", gap: 10}}>
      {
        transfer.map((item) => (
            <TransferList key={item.id} item={item} />
        ))
      }
    </View>
  )
}

export default Transfer
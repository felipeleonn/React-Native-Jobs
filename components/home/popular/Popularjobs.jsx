import { useState } from 'react'
import { useRouter } from 'expo-router'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
 } from 'react-native'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCar from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Popularjobs
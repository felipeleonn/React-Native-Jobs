import { useState } from 'react'
import { useRouter } from 'expo-router'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
 } from 'react-native'

import ShowAll from './ShowAll'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCar from '../../common/cards/popular/PopularJobCard'

import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch(
    'search',
    {
     query: 'React developer',
     num_pages: 1 
    }
  )


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <ShowAll />
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          // Spinner that shows that we are loading, classic spinner of loading
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): error ?(
          <Text>Something Went Wrong</Text>
        ):(

          <FlatList 
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={({ item }) => (
              <PopularJobCar 
                item={item}
              
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
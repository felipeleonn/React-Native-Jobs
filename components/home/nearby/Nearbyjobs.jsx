import { useRouter } from 'expo-router'
import { 
  View, Text, TouchableOpacity, ActivityIndicator
 } from 'react-native'

import ShowAll from '../popular/ShowAll'
import styles from './nearbyjobs.style'
import { COLORS} from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch(
    'search',
    {
     query: 'React developer',
     num_pages: 1 
    }
  )

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard 
              job = {job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs
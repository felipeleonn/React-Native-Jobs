import { useState, useEffect } from 'react'
import axios from 'axios'


// import { RAPID_API_KEY } from '@env'
// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // options sale de ->> https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch 
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': '56a41cc11fmshf5bd1770543be2bp1bbf17jsnbb37104caacd',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect (() => {
    fetchData()
  }, [])


  // to re fetch data if neccesry
  const reFetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return {
    data, 
    isLoading,
    error,
    reFetch

  }
}

export default useFetch
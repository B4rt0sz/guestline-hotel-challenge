import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'

const fetcher = async (url: string) =>
  axios.get(url).then((res: AxiosResponse) => res.data)

const useRequest = (apiUrl: string) => {
  const { data, error } = useSWR(apiUrl, fetcher)

  return { data, error }
}

export default useRequest

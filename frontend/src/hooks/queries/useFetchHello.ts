import { useQuery } from 'react-query';
import { API } from '../../apis';

export const fetchHelloKey = 'fetchHelloKey';

export const useFetchHello = () =>
  useQuery([fetchHelloKey], {
    queryFn: async () => {
      const response = await API.fetchHello();
      return response.data;
    },
  });

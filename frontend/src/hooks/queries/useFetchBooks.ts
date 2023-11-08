import { useQuery } from "react-query";
import { API } from "../../apis";

export const fetchBooksKey = "fetchBooksKey";

export const useFetchBooks = () =>
  useQuery([fetchBooksKey], {
    queryFn: async () => {
      const response = await API.fetchBooks();
      return response.data;
    },
  });

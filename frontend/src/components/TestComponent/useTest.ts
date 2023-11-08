import { useRecoilState } from "recoil";
import { Book, testState } from "../../recoil/testState/atom";
import { useEffect, useState } from "react";
import { useFetchBooks } from "../../hooks/queries/useFetchBooks";

export const useTest = () => {
  const [newBook, setNewBook] = useState<Book>({
    title: "",
    author: "",
  });
  const [books, setBooks] = useRecoilState(testState.books);
  const [searchText, setSearchText] = useRecoilState(testState.searchText);

  const { isSuccess, isFetching, isLoading, data } = useFetchBooks();

  useEffect(() => {
    if (isFetching || isLoading) return;
    if (isSuccess) {
      setBooks(data);
    }
  }, [isSuccess, isFetching, isLoading]);

  const filteringBooks = books.filter((book) =>
    book.title.includes(searchText)
  );

  const onDelete = (title: string) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  const onAdd = () => {
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
  };

  return {
    newBook,
    filteringBooks,
    searchText,
    setNewBook,
    setSearchText,
    onAdd,
    onDelete,
  };
};

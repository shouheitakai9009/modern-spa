import { atom } from 'recoil';
import { getRecoilKeyHash } from '../../utils/getRecoilKeyHash';

const originTestStateKey = ['books', 'searchText'] as const;
export const testStateKey = getRecoilKeyHash(originTestStateKey);

export type Book = {
  title: string;
  author: string;
};

export const testState = {
  books: atom<Book[]>({
    key: testStateKey.books,
    default: [],
  }),
  searchText: atom<string>({
    key: testStateKey.searchText,
    default: '',
  }),
};

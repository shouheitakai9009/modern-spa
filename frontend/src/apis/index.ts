import { AxiosResponse } from 'axios';
import { api } from './base';
import { Book } from '../recoil/testState/atom';

export const API = {
  fetchHello: async (): Promise<AxiosResponse<string>> => api.get('/'),
  fetchBooks: async (): Promise<AxiosResponse<Book[]>> => api.get('/books'),
};

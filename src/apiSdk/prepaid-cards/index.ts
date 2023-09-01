import axios from 'axios';
import queryString from 'query-string';
import { PrepaidCardInterface, PrepaidCardGetQueryInterface } from 'interfaces/prepaid-card';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPrepaidCards = async (
  query?: PrepaidCardGetQueryInterface,
): Promise<PaginatedInterface<PrepaidCardInterface>> => {
  const response = await axios.get('/api/prepaid-cards', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPrepaidCard = async (prepaidCard: PrepaidCardInterface) => {
  const response = await axios.post('/api/prepaid-cards', prepaidCard);
  return response.data;
};

export const updatePrepaidCardById = async (id: string, prepaidCard: PrepaidCardInterface) => {
  const response = await axios.put(`/api/prepaid-cards/${id}`, prepaidCard);
  return response.data;
};

export const getPrepaidCardById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/prepaid-cards/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePrepaidCardById = async (id: string) => {
  const response = await axios.delete(`/api/prepaid-cards/${id}`);
  return response.data;
};

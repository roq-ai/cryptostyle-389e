import axios from 'axios';
import queryString from 'query-string';
import { FinanceManagerInterface, FinanceManagerGetQueryInterface } from 'interfaces/finance-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFinanceManagers = async (
  query?: FinanceManagerGetQueryInterface,
): Promise<PaginatedInterface<FinanceManagerInterface>> => {
  const response = await axios.get('/api/finance-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFinanceManager = async (financeManager: FinanceManagerInterface) => {
  const response = await axios.post('/api/finance-managers', financeManager);
  return response.data;
};

export const updateFinanceManagerById = async (id: string, financeManager: FinanceManagerInterface) => {
  const response = await axios.put(`/api/finance-managers/${id}`, financeManager);
  return response.data;
};

export const getFinanceManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/finance-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFinanceManagerById = async (id: string) => {
  const response = await axios.delete(`/api/finance-managers/${id}`);
  return response.data;
};

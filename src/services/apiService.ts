import { IFormValues } from '@/models/form';
import { GetCreditResponse } from '../models/api';

export const getCreditLimits = async () => {
  const res = await fetch('http://localhost:3001/limits', { method: 'GET' });
  const data: GetCreditResponse = await res.json();

  return data;
};

export const createCreditProcess = (payload: IFormValues) => {
  return fetch('http://localhost:3001/credits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

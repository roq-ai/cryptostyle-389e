import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface PrepaidCardInterface {
  id?: string;
  balance: number;
  currency: string;
  expiration_date?: any;
  created_at?: any;
  updated_at?: any;
  customer?: CustomerInterface[];

  _count?: {
    customer?: number;
  };
}

export interface PrepaidCardGetQueryInterface extends GetQueryInterface {
  id?: string;
  currency?: string;
}

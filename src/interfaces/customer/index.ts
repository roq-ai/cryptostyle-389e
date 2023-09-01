import { UserInterface } from 'interfaces/user';
import { PrepaidCardInterface } from 'interfaces/prepaid-card';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  prepaid_card_id: string;
  last_login?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  prepaid_card?: PrepaidCardInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  prepaid_card_id?: string;
}

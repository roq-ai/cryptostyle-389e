import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FinanceManagerInterface {
  id?: string;
  user_id: string;
  last_login?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FinanceManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}

const mapping: Record<string, string> = {
  admins: 'admin',
  customers: 'customer',
  'finance-managers': 'finance_manager',
  organizations: 'organization',
  'prepaid-cards': 'prepaid_card',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

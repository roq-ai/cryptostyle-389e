interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator', 'Finance Manager', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'CryptoStyle',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create an account for trading in cryptocurrency',
    'Manage prepaid card and ledger account',
    'View prepaid card balance',
    'Delete account',
  ],
  ownerAbilities: [
    'Manage organization',
    'Manage tatum.io x-api-key and ledger account id',
    'Invite and remove Administrators, Finance Managers, and Customer Service Representatives',
    'Connect organization with cryptocurrency account',
  ],
};

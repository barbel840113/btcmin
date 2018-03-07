import { environment } from './../../environments/environment';


export const HOSTAPI =  environment.appresource1Url;;
export const HOSTIDENTITY = environment.identityUrl;

export const URL_LOGIN = HOSTIDENTITY + 'connect/token';
export const ADMIN_URL = HOSTAPI + 'api/admin/doadminoperation/';
export const KRAKENCURRENCY = 'https://api.kraken.com/0/public/Assets';
export const BTCSTAMPUSD = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';
export const REGISTER = HOSTIDENTITY + 'app/rolset/register';
export const GETUSERNAME = HOSTAPI + 'api/Account/getusername';
export const GETUSERSETTINGINFORMATION = HOSTAPI + 'api/Account/getuserinformations';
export const UPDATEUSERSETTINGS = HOSTAPI + 'api/Account/updateuserinformations';
export const CREATENEWBITCOINADDRESS = HOSTAPI +'api/BTCApp/createbitcoinaddress';
export const GETBITCIONADDRESSFORUSER = HOSTAPI +'api/BTCApp/getbitcoinaddress';

export const CREATEBUSINESSUNIT = HOSTAPI + 'api/AppSettings/createbusinessunit';
export const GETBUSINESSUNIT = HOSTAPI + 'api/AppSettings/getbusinessunit';

//get user settings
export const GETUSERSETTINGS = HOSTAPI + 'api/AppSettings/getpersonaldetails';
export const UPDATEPRIMARYADDRESS = HOSTAPI + 'api/AppSettings/updatepersonaldetails';

//create tier1 model
export const CREATETIER1MODEL = HOSTAPI + 'api/AppSettings/createTier1Settings';
//get tier1 model user settings
export const GETUSERTIER1MODEL = HOSTAPI + 'api/AppSettings/getTier1Settings';


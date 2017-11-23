const protocol = window.location.protocol;
var identityserver = window.location.hostname + ':5000';
var apiresoure = window.location.hostname + ':5001';


export const HOSTAPI =  `http://${apiresoure}/`;
export const HOSTIDENTITY =  `http://${identityserver}/`;

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

export const CREATEBUSINESSUNIT = HOSTAPI + '/api/AppSettings/createbusinessunit';
export const GETBUSINESSUNIT = HOSTAPI + '/api/AppSettings/getbusinessunit';



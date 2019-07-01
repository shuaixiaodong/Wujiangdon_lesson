import Cookie from 'js-cookie';

const TokenKey = 'DS_Token'
export function getToken() {
  return Cookie.get(TokenKey);
}
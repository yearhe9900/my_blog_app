import request from '../utils/request';

export async function querylist(params) {
  return request('/api/values', {
    method: 'get'
  });
}
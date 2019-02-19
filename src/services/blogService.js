import request from '../utils/request';

export async function querylist(params) {
  return request('/api/values/GetBlogList', {
    method: 'post',
    body: params
  });
}
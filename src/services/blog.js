import request from '@/utils/request';

export async function getBlogList(params) {
    return request('/api/values/GetBlogList', {
        method: 'POST',
        body: params,
    });
}

export async function getBlogDetailById(params) {
    return request('/api/values/GetBlogDetailById', {
        method: 'POST',
        body: params,
    });
}

export async function setBlogLike(params) {
    return request('/api/values/SetLike', {
        method: 'POST',
        body: params,
    });
}

export async function getEnabledClassificationList() {
  return request('/api/values/GetEnabledClassificationList', {
    method: 'POST',
  });
}

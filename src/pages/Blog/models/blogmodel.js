import { getBlogList } from '@/services/blog';
import { message } from 'antd';

export default {
  namespace: 'blogmodel',
  state: {
    bloglist: [],
    loading: true,
    total: 1,
    pageNo: 1,
    pageSize: 4
  },

  effects: {
    *changePageNo({ parms }, { put }) {
      yield put({
        type: 'savePageNo',
        payload: parms
      });
    },
    *getBlogs({ parms }, { call, put }) {
      yield put({
        type: 'saveLoading',
        payload: true
      });
      const response = yield call(getBlogList, parms);
      if (response && response.code === "200") {
        yield put({
          type: 'saveBlogList',
          payload: response,
        });
      }
      else if (response && response.code !== "200") {
        message.error(response.msg);
      }
      yield put({
        type: 'saveLoading',
        payload: false
      });
    }
  },
  reducers: {
    saveLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    savePageNo(state, action) {
      return {
        ...state,
        pageNo: action.payload,
      };
    },
    saveBlogList(state, action) {
      return {
        ...state,
        bloglist: action.payload.output,
        total: action.payload.total
      };
    }
  },
};

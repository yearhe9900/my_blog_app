import { getBlogList, getEnabledClassificationList } from '@/services/blog';
import { message } from 'antd';

export default {
  namespace: 'blogmodel',
  state: {
    bloglist: [],
    loading: true,
    total: 1,
    pageNo: 1,
    pageSize: 4,
    drawerShow: false,
    tags: [],
    classificationId: ""
  },

  effects: {
    *getTags(_, { call, put }) {
      const response = yield call(getEnabledClassificationList);
      if (response && response.code === "200") {
        yield put({
          type: 'saveTags',
          payload: response,
        });
      }
    },
    *changeClassificationId({ parms }, { call, put }) {
      yield put({
        type: 'saveClassificationId',
        payload: parms.classificationId
      });
      yield put({
        type: 'savePageNo',
        payload: 1
      });
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
    },
    *changeDrawerShow({ parms }, { put }) {
      yield put({
        type: 'saveDrawerShow',
        payload: parms
      });
    },
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
    saveClassificationId(state, action) {
      return {
        ...state,
        classificationId: action.payload,
      };
    },
    saveDrawerShow(state, action) {
      return {
        ...state,
        drawerShow: action.payload,
      };
    },
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
    },
    saveTags(state, action) {
      return {
        ...state,
        tags: action.payload.classifications
      };
    },
  },
};

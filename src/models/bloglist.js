import { querylist } from '../services/blogService';

export default {
    namespace: 'bloglist',
    state: {
        pageNo: 1,
        pageSize: 10,
        total:0,
        listData:[],
    },

    subscriptions: {

    },

    effects: {
        *changePagination({ payload }, { call, put }) {
            yield put({
                type: 'paginationChange',   //这个就是调用reducers中的方法进行跟新当前命名空间state的数据
                payload: payload
            });
        },
        *getBlogList({ payload }, { call, put }) {
          var data = yield call(querylist,payload);
            yield put({
                type: 'setBlogList',   //这个就是调用reducers中的方法进行跟新当前命名空间state的数据
                payload: data
            });
        }
    },

    reducers: {
        paginationChange(state, { payload }) {
            return {
                ...state,
                pageNo: payload.pageNo,
                pageSize: payload.pageSize
            }
        },
        setBlogList(state, { payload }) {
            return {
                ...state,
                listData:payload.data.output,
                total:payload.data.total
            }
        }
    },

};
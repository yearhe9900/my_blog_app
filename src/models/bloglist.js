export default {

    namespace: 'bloglist',

    state: {
        page: 1,
        pageSize: 10
    },

    subscriptions: {

    },

    effects: {
        *changePagination({ payload }, { call, put }) {
            yield put({
                type: 'paginationChange',   //这个就是调用reducers中的方法进行跟新当前命名空间state的数据
                payload: payload
            });
        }
    },

    reducers: {
        paginationChange(state, { payload }) {
            return {
                ...state,
                page: payload.page,
                pageSize: payload.pageSize
            }
        }
    },

};
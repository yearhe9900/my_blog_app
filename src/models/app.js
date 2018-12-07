export default {

    namespace: 'app',

    state: {
        item: ["1"]
    },

    subscriptions: {

    },

    effects: {
        *changeMenuItem({ payload }, { call, put }) {
            yield put({
                type: 'menuItemChange',   //这个就是调用reducers中的方法进行跟新当前命名空间state的数据
                payload:payload
             });
        }
    },

    reducers: {
        menuItemChange(state, {payload}) {
            return {
                ...state,
                item: payload.item
            }
        }
    },

};
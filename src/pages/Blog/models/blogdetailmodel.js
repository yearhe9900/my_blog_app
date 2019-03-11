import { getBlogDetailById } from '@/services/blog';
import { message } from 'antd';

export default {
    namespace: 'blogdetailmodel',
    state: {
        commendation: 0,
        content: '',
        description: '',
        id: '',
        logo: '',
        tags: [],
        title: '',
        cdt: '',
        dividerDashed: true,
        loading: true,
        classificationIds: [],
    },

    effects: {
        *getBlogById({ parms }, { call, put }) {
            yield put({
                type: 'saveLoading',
                payload: true
            });
            const response = yield call(getBlogDetailById, parms);
            if (response && response.code === "200") {
                yield put({
                    type: 'saveBlogDetail',
                    payload: response.data,
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
    },

    reducers: {
        saveLoading(state, action) {
            return {
                ...state,
                loading: action.payload,
            };
        },
        saveBlogDetail(state, action) {
            return {
                ...state,
                commendation: action.payload.commendation,
                content: action.payload.content,
                description: action.payload.description,
                id: action.payload.id,
                logo: action.payload.logo,
                tags: action.payload.tags,
                title: action.payload.title,
                cdt: action.payload.cdt,
                classificationIds: action.payload.classificationIds,
            };
        },
    },
};

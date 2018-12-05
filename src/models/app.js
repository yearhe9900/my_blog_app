export default {

    namespace: 'app',

    state: {
        item: 1
    },

    subscriptions: {

    },

    effects: {

    },

    reducers: {
        menuItemChange(state, action) {
            console.log(state)
            console.log(action)
            return {
                ...state,
                item: action.item
            }
        }
    },

};
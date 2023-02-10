import {actionType, INCREMENT} from "./action";

const initialState = {
    count: 0
};

export const reducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};
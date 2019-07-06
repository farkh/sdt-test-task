import { ADD_REQUEST } from '../types/requestTypes';

const initialState = {
    requests: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_REQUEST:
            return {
                ...state,
                requests: [
                    ...state.requests,
                    action.payload,
                ],
            };
        default:
            return state;
    }
}

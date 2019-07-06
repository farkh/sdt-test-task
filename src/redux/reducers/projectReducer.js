import { ADD_PROJECT } from '../types/projectTypes';

const initialState = {
    projects: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload,
                ],
            };
        default:
            return state;
    }
};

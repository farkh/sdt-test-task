import { ADD_PROJECT } from '../types/projectTypes';

const initialState = {
    projects: [
        {
            title: 'TestProject',
            value: 'testproject',
        },
        {
            title: 'SDT Test',
            value: 'sdt_test',
        },
    ],
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

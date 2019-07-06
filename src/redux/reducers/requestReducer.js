import { ADD_REQUEST } from '../types/requestTypes';

const initialState = {
    requests: [
        {
            title: 'Test request',
            text: 'Hello world!',
            project: 'SDT Test',
            priority: 1,
            date: '06.07.2019',
        },
        {
            title: 'Gimme a job please :)',
            text: 'Lorem ipsum blah-blah-blah',
            project: 'SDT Test',
            priority: 2,
            date: '05.07.2019',
        },
        {
            title: 'Yet another incoming request',
            text: 'Dummy description',
            project: 'TestProject',
            priority: 0,
            date: '06.07.2019',
        },
    ],
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

import { ADD_REQUEST } from '../types/requestTypes';

export const addRequest = (request) => dispatch => dispatch({
    type: ADD_REQUEST,
    payload: request,
});

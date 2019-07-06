import { ADD_PROJECT } from '../types/projectTypes';

export const addProject = (project) => dispatch => dispatch({
    type: ADD_PROJECT,
    payload: project,
});

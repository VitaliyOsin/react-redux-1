import * as actionTypes from './actionTypes';

export function taskCompleted(id) {
    return {type: actionTypes.taskUpdated, payload: {id, completed: true}};
}

export function titleChanged(id) {
    return {type: actionTypes.taskUpdated, payload: {id, title: `New title for ${id}`}};
}

export function taskRemoved(id) {
    return {type: actionTypes.taskRemoved, payload: {id}};
}
import {BehaviorSubject} from "rxjs";

const globalState = JSON.parse(localStorage.getItem('globalState') || '{}');
export const appState = new BehaviorSubject(globalState);

export const setGlobalState = (key, value) => {
    const temp = getGlobalState(key) || {};
    temp[key] = value;

    localStorage.setItem('globalState', JSON.stringify(temp));
    appState.next(temp);
}
export const removeGlobalState = (key) => {
    const temp = getGlobalState(key) || {};
    delete temp[key];

    localStorage.setItem('globalState', JSON.stringify(temp));
    appState.next(temp);
}
export const clearGlobalState = () => {
    localStorage.clear();
    appState.next(undefined);
}

export const getGlobalState = (key) => {
    let temp = JSON.parse(localStorage.getItem('globalState') || '{}');
    return temp[key];
}


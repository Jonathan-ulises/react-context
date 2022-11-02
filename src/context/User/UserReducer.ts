/*
Este archivo implementa el Reducer para manipular el estado
*/

import { ACTION, InitStateUser, } from "../../model/User.interfaces";

// import { InitStateUser } from "../../model/User.interfaces";
import { ACTION_USER } from '../types';

// const UserReducer = <T>(state: T, action: any) => {
//     return {} as InitStateUser
// }

// export default UserReducer;

export default (state: InitStateUser, action: ACTION<InitStateUser>) => {
    const {payload, type} = action;
    console.log('ACTION ', action)
    switch (type) {
        case ACTION_USER.GET_USERS:
            return {
                ...state,
                users: payload.users
            };
        case ACTION_USER.GET_PROFILE:
            return {
                ...state,
                selectedUser: payload.selectedUser
            };
        default:
            return {
                ...state,
                selectedUser: payload.selectedUser
            };
    }
}
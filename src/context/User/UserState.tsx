/*
Este archivo representa la definicio del estado, aqui estara el
estado que se va a consumir
*/

import axios from 'axios'
import React, { useReducer } from 'react'
import { InitStateUser } from '../../model/User.interfaces'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import { ACTION_USER } from '../types';

type PropsUsrState = {
  children: any
}

const UserState = (props: PropsUsrState) => {
  
  //Definimos un estado inicial
  const initialState: InitStateUser = {
    users: [],
    selectedUser: null
  }

  //Definimos un useReducer para manejar el estado de la aplicacion
  const [state, dispatch] = useReducer(UserReducer, initialState)

  //Funcion para solicitar la lista de usuarios
  const getUsers = async () => {
    console.log(props);
    const res = await axios.get('https://reqres.in/api/users');
    console.log('dalist => ', res.data.data)
    dispatch({
      type: ACTION_USER.GET_USERS,
      payload: {
        users: res.data.data,
        selectedUser: null
      }
    })
  }

  //Funcion para solicitar los datos de un usuario
  const getProfile = async (id: number) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(res)
    dispatch({
      type: ACTION_USER.GET_PROFILE,
      payload: {
        users: [],
        selectedUser: res.data.data
      }
    })
  }

  return (
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile
    }} >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
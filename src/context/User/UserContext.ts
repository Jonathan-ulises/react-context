/*
Este archivo genera el contexto, creando un objeto mediante la funcion createContext.
*/

import { createContext } from "react";
import { UsrContext } from "../../model/User.interfaces";

const UserContext = createContext({} as UsrContext);

export default UserContext;
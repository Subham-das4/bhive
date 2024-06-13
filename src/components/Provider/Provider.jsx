import axios from 'axios';
import React, { createContext, useReducer } from 'react'

const DataContext = createContext()

const initialState= {
  
}
const reducer = async(state, action) => {
    switch (action.type) {
      case actionTypes.GET_DATA:
        const data = await axios.get('https://www.subhamdas.info/data.php')
        .catch(err => console.log(err))
        let temp = {...state}
        temp.spaceOverview = data.data
        return temp
      default:
        return state;
    }
}
const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DataContext.Provider value={{state, dispatch}} >
    {children}
    </DataContext.Provider>
  )
}

export default Provider

const actionTypes = {
  GET_DATA: "GET_DATA"
}
export {actionTypes , DataContext}

import React, { useState, useEffect } from "react";
import myContext from "./index";

export default function Provider({ children }) {

  const [api, setApi] = useState([])
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name:"",
      },
    },
  });
  
  useEffect(() => {
    const fetchApi = async () => {
      const ENDPOINT = 'https://rickandmortyapi.com/api/character';
      const { results }  = await fetch(ENDPOINT).then((result) => result.json());     
      setApi(results);
    }
    fetchApi();
  }, []);

  function filterName({value}) {
    setFilter({...filter, filters: { filterByName: { name: value}}})
  }
 
  const contextValue = {
    api,   
    filter,
    filterName, 
  };

  return(
    <myContext.Provider value={ contextValue }>
      { children }
    </myContext.Provider>
  )
}
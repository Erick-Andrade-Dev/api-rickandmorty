import React, {useContext} from "react";
import myContext from "../context";

function Main() {

  const {
    api,   
    filter,
    filterName   
  } = useContext(myContext)  
  
  
  
  return(
    <div>
      <label htmlFor="filter-name" className="label-filter-name">
        <p className="search">Pesquisar personagem</p>
        <input
          id="filter-name"
          type="text" 
          placeholder="Insira o nome do personagem."     
          onChange={({target}) => filterName(target)}       
        />
      </label>
      <div className="container-personagens">       
        { api.filter((e) => e.name.includes(filter.filters.filterByName.name))
          .map((item) => (
          <div key={item.id}> 
            <p className="name-personagens">{item.name}</p>
            <img src={item.image} alt={item.name} className="image-personagens"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main;
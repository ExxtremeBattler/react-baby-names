import React from "react";

export function NamePicker ({names, searchVal, shortList, updateShortList}){

  const filteredNames = names.filter(element => element.name.toLowerCase().includes(searchVal.toLowerCase()))

  function handleClick (id, name) {
    updateShortList([...shortList, name])
  }
    
    return(
        <ul>

      {filteredNames.map((element) => 
      <li className={element.sex} key = {element.id}> 
      <button onClick = {() => {handleClick(element.id, element.name)}} > {element.name} </button> 
      </li>
      )}

    </ul>
    )
    
}
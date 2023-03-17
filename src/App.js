import React from 'react';
import './styles.css';

import names from "./data/index"

function App({names}) {
  return (
    <ul>

      {names.map((element) => 
      <li className={element.sex} key = {element.id}> 
      <button> {element.name} </button> 
      </li>
      )}

    </ul>
  );
}

export default App;

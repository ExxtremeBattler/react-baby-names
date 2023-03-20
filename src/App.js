import React, { Fragment, useState } from 'react';
import './styles.css';

import { NamePicker } from './components/NamePicker';
import { Search } from './components/Search';
import { ShortListTag } from './components/short-List';

function App({names}) {

  const [searchVal, updateSearchVal] = useState("")
  const [shortList, updateShortList] = useState([])

  return (
  
  <Fragment>
    <Search searchVal = {searchVal} updateSearchVal = {updateSearchVal}></Search>
    <ShortListTag shortList = {shortList} updateShortList= {updateShortList}/>
    <NamePicker names={names} searchVal = {searchVal} shortList = {shortList} updateShortList = {updateShortList}></NamePicker>
    </Fragment>
  );
}

export default App;

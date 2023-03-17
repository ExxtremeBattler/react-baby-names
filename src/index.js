import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import App from './App';

import {names} from "./data"

ReactDOM.render(<App names = {names} />, document.getElementById('root'));



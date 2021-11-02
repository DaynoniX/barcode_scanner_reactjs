import React from "react";

import Stream from './Stream';
import List from "./List";

import '../style/global.scss';

let App = (props) =>{
    return (
        <div className={'main'} style={{height: window.innerHeight}}>
            <Stream />
            <List />
        </div>
    )
}

export default App;

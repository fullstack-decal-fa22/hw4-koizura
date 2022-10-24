import React from 'react';

import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <Color color="red" handleClick={props.update}></Color>
        <Color color="pink" handleClick={props.update}></Color>
        <Color color="blue" handleClick={props.update}></Color>
        <Color color="green" handleClick={props.update}></Color>
      </div>
    );
}

export default Menu;
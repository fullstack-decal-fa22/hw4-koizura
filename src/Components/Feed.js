import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [colors, setColors] = useState([]);
    const posts = colors.map(color => <Block color={color}></Block>); // TODO: edit this variable

    const addColor = function(color) {
        let l = [...colors];
        l.push(color);
        setColors(l);
    }

    return (
        <div>
            <Menu update={addColor}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;
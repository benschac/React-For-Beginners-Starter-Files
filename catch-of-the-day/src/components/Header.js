import React from 'react';

// console.log(React, 'react obj');


    const Header = (props) => {
        return (
            <header className="top">
                <h1>Catch of the Day</h1>
                <h3>{props.tagline}</h3>
            </header>
        )
    }


export default Header;
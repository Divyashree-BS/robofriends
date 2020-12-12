import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className ="tc">
        <input
        type="search" placeholder="Search Robots"
        onChange = {searchChange}/>
        </div>
    );
}

export default SearchBox;
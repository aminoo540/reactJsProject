import React from 'react';
import {Input} from '@material-ui/core';

const Search = ({value, onSearch, children}) =>
    <div>
        {children} <Input
        value={value}
        onChange={onSearch}
        type="search"
    />
    </div>;

export default Search;

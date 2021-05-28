import React, { useState } from 'react';
import "./SearchFilter.css";


const SearchFilter = (props) =>  {
    const [searchFilter, setSearchFilter] = useState('');

    const onSearchHandler = (event) => {
        console.log(event.target.value);
        setSearchFilter(event.target.value);
        props.onSearchFilter(event.target.value);
    };

    const typeFilterHandler = (event) => {
        console.log(event.target.value);
    };

    const statusFilterHandler = (event) => {
        console.log(event.target.value);
    }; 

    return (
      <div className="searchFilter-bar">
          <div className="search-bar">
          <input type="text" onChange={onSearchHandler} placeholder="Search..."></input>
          </div>
          <div className="filter-Bar">
            <label for="type" >Type</label>
            <select id="type" name="type" onChange={typeFilterHandler}>
                <option value="any">Any</option>
                <option value="power">Power Tool</option>
                <option value="plugin">Plugin Power Tool</option>
                <option value="Hand">Hand Tool</option>
            </select>
            <label for="status">Status</label>
            <select id="status" name="status" onChange={statusFilterHandler}>
                <option value="any">Any</option>
                <option value="checkedin">Checked in</option>
                <option value="checkedout">Checked out</option>
            </select>


          </div>
        </div>
    );
};



export default SearchFilter;
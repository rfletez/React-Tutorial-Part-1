import { useState } from "react";

function Search({ searchItem, handleSearch }) {
    return(
        <div>
            Search: 
            <input 
                type="text" 
                value={searchItem} 
                onChange={handleSearch} 
            />
        </div>
    );
}
export default Search;
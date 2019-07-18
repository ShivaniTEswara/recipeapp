import React from 'react';

function Search(props)
{
    return(
    <form
    style={{ marginBottom:"2rem" }}
        onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(e.target.recipename.value);
    }}>
    <input 
        className="form__input" 
        type="text"
        name="recipename"
    
    />
    <input 
        className="form__button"
        type="submit"

    />

        {/* <div>
            <h1>Enter recipe</h1>
            <input type="text" name="recipename"></input>
            <button type="submit">Search</button>
        </div>*/}
    </form> 
    );
}

export default Search;
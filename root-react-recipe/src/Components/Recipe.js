import React from 'react';
import { Link } from 'react-router-dom';


function Recipe(props)

{
    
    return (
           <div className="col-md-4" style={{marginBottom:"2rem"}}>
           <div className="recipes__box">
             <img 
                className="recipes__box-img"
                src ={props.data.image_url} alt={props.data.recipe_id} />
            <div className="recipes__text">
            <h5 className="recipes__title">
            {props.data.title}
            </h5> 
            <p className="recipes__subtitle">
            Publisher:
            <span> {props.data.publisher}</span>
            </p>

            </div>
            <button className="recipe_buttons">
             <Link 
                to=
                    {`/recipe/${props.data.recipe_id}`}

            >
                View More
            </Link>
            </button>
             {/* <form>
             <button type="submit" formaction={props.data.f2f_url}>More details</button>
             </form> */}
          </div>
          </div>
          );
}

export default Recipe;
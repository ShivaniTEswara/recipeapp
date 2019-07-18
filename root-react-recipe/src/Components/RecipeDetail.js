import React from 'react';
import { Link } from 'react-router-dom'

//const YOUR_API_KEY="e27ddc6c9d97b5c8a4bb9dd96d9b66b1";//shivanite.1rn16cs099

//const YOUR_API_KEY="56097ddb231cc6b401a4e3ccc3161d4d";//SHIVANITE
const YOUR_API_KEY=process.env.REACT_APP_API_KEY;

class RecipeDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recipe: null
        };
    }

componentDidMount(){
    //console.log("hello",this.props);
    this.searchRecipe(this.props.match.params.id);
}    
    searchRecipe(recipeId)
{
  fetch(`https://www.food2fork.com/api/get?key=${YOUR_API_KEY}&rId=${recipeId}`)
  .then(response=>response.json())
//   .then(data=>console.log("fectched json data",data))
  .then(data=>this.setState({
    recipe: data.recipe
  }))
  
  // 
}
    render(){
        //console.log("inside render method",)
        
        if(this.state.recipe){
            const{
                image_url,
                recipe_id,
                title,
                publisher,
                source_url,
                ingredients
            
            }=this.state.recipe;

        
        return (
            <div className="container">
                <div className="active-recipe">
               <img clasname="active-recipe__img" src ={image_url} alt={recipe_id} />  
               <h3 className="active-recipe__title">
              {title}
              </h3>
              <h4 className="active-recipe__publisher">
              {publisher}
              </h4>
              <p className="active-recipe__website"> Website:
              <span>
                  <a
                  
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {source_url}</a>
                  </span>
                  </p>
              <ul>
                  {
                    ingredients.map((ingridient,index)=>(<li key={index}>{ingridient}</li>))
                  }
                </ul>

                <button className="active-recipe__button">


              <Link to="/">
                 HOME
             </Link>
             </button>
             </div>
             </div>
 
              
           
           );
        }
        else{
            return(
                <div>
                    <h1>fetching data</h1>
                </div>
            );
        }
    }
}


// { 
//       return (
//            <div>
//              <img src ={props.data.image_url} alt={props.data.recipe_id} /> 
//              <p>one</p>
//              <Link to="/">
//                 HOME
//             </Link>

//              {/* <form>
//              <button type="submit" formaction={props.data.f2f_url}>More details</button>
//              </form> */}
//           </div>
//           );
// }

export default RecipeDetail;
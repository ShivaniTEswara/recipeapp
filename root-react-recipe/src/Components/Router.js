import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { Switch, Route } from 'react-router'
import RecipeDetail from './RecipeDetail';
import App from './../App';

function Router(props)
{   return (
           
          <BrowserRouter>
            <Switch>
                <Route 
                    exact path="/" 
                    component={App}
                />
                <Route 
                    path="/recipe/:id" 
                    component={RecipeDetail}
                />
                
            </Switch>
          </BrowserRouter>
          );
}

export default Router;
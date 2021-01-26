import React from "react";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./home";
import TotalCount from "./totalCount";



function Main(){


  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/totalcount" component={TotalCount}/>
      </Switch>
    </div>
  );
}

export default withRouter(Main)

import React from "react";
import { connect } from "react-redux";
import increaseCount from "./redux/counter"


function Home(props){
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => increaseCount()}>Click Me</button>
    </main>
  );
}

const mapStateToProps = (state) => {
  return{
    state
  }
}

export default connect(mapStateToProps)(Home)

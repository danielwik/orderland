import React from "react";
import { connect } from "react-redux"


function TotalCount(props){
  return (
    <main>
      <h1>Total Count</h1>
      <p>{props.state.count}</p>
    </main>
  );

}

const mapStateToProps = (state) => {
  return{
    state
  }
}

export default connect(mapStateToProps)(TotalCount)

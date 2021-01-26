
let firstLoad = 0;

const INITIAL_STATE = {
  count: 0,
}

const increaseCount = (state = INITIAL_STATE) => {
  if(firstLoad !== 0){
    state.count++
  }else{
    firstLoad = 1;
  }
  return(
    state
  );
};


export default increaseCount;

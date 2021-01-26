import { createStore } from "redux";
import increaseCount from "./counter";

export default createStore(increaseCount);

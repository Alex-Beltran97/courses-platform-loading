import { DispatchPost, Post } from "../../interfaces/Posts";

const initialState : Post[] = []

const reducer = (state = initialState, action : DispatchPost) =>{

  switch(action.type){
    case "LOAD_POSTS":
      return action.payload
    break;
    default:
      return state;
  };
};

export default reducer;
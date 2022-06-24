const initialState = {inputdata:[],data:[]}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "GET_INPUT_DATA":
            return {...state,inputdata:action.payload}
        case "RECEIVE_FETCH_DATA":
            return {...state,data:action.payload}
        default:
            return state
    }
}
export default reducer;
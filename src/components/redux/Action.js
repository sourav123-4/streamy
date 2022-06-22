export const getInputData = (data)=>{
    return {
        type: "GET_INPUT_DATA",
        payload: data,
    }
}

export const getFetchData = (inputdata)=>{
    return {
        type: "GET_FETCH_DATA",
        payload:inputdata,
    }
}

export const receiveFetchData = (data)=>{
    return {
        type: "RECEIVE_FETCH_DATA",
        payload: data,
    }
}
import {
    DataFetchTypes,
    DATA_FETCH_FAILED,
    DATA_FETCH_LOADING,
    DATA_FETCH_SUCCESS,
  } from "../Action";
  
  export interface initialStateI {
    loading: boolean;
    data?: any;
    errorMessage?: string;
  }
  
  const initialState: initialStateI = {
    loading: false,
    data: [],
    errorMessage: "",
  };
  
  const DataReducer = (
    state: initialStateI = initialState,
    action: DataFetchTypes
  ): initialStateI => {
    switch (action.type) {
      case DATA_FETCH_LOADING:
        return {
          ...state,
          loading: true,
          errorMessage: "",
        };
      case DATA_FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          errorMessage: "",
        };
      case DATA_FETCH_FAILED:
        return {
          ...state,
          loading: false,
          data: [],
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default DataReducer;
  
import { ERROR, GOTALLPRODUCT, LOADING } from "../actions/types"

const productInit = {
    isLoading: false,
    isError: "",
    products: [],
    filteredProduct: []
}
export const ProductReducer = (state=productInit, {type, payload})=>{
    switch(type){
        case LOADING:
            return{
                ...state,
                isLoading: true
            }
        case ERROR:
            return{
                ...state,
                isLoading: false,
                isError: payload,
            }
        case GOTALLPRODUCT:
            return{
                ...state,
                isLoading: false,
                isError: "",
                products: payload
            }
        default:
            return state;
    }

}
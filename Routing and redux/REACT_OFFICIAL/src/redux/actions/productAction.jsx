import { ActionTypes } from "../contants/actionTypes"



export const setProducts=(products)=>{
return {
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
}
}



export const selectedtProducts=(product)=>{
return {
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product,
}
}

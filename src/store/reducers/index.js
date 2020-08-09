import { combineReducers } from "redux";
import { category } from "../ducks/category.duck"
import { product } from "../ducks/product.duck";


export default function reducers() {
    return combineReducers({
        category,
        product
    })
}
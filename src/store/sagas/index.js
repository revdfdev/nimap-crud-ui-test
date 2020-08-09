import { all } from "redux-saga/effects";
import { getCategoriesSaga, addCategorySaga, editCategorySaga } from "../ducks/category.duck";
import { getProductsSaga, addProductsSaga, editProductSaga, deleteProductSaga } from "../ducks/product.duck";

export default function* sagas() {
    yield all([
        getCategoriesSaga(),
        addCategorySaga(),
        editCategorySaga(),
        getProductsSaga(),
        addProductsSaga(),
        editProductSaga(),
        deleteProductSaga()
    ]);
}
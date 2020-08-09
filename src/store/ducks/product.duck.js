import { call, put, takeEvery } from "redux-saga/effects"

//ACTIONS

const GET_ALL_PRODUCTS = "nimap-crud-test/product/GET_ALL_PRODUCTS";
const GET_ALL_PRODUCTS_SUCCESS = "nimap-crud-test/product/GET_ALL_PRODUCTS_SUCCESS";
const GET_ALL_PRODUCTS_FAILURE = "nimap-crud-test/product/GET_ALL_PRODUCTS_FAILURE";

const ADD_PRODUCTS = "nimap-crud-test/product/ADD_PRODUCTS";
const ADD_PRODUCTS_SUCCESS = "nimap-crud-test/product/ADD_PRODUCTS_SUCCESS";
const ADD_PRODUCTS_FAILURE = "nimap-crud-test/product/ADD_PRODUCTS_FAILURE";

const EDIT_PRODUCT = "nimap-crud-test/product/EDIT_PRODUCT";
const EDIT_PRODUCT_SUCCESS = "nimap-crud-test/product/EDIT_PRODUCT_SUCCESS";
const EDIT_PRODUCT_FAILURE = "nimap-crud-test/product/EDIT_PRODUCT_FAILURE";

const DELETE_PRODUCT = "nimap-crud-test/product/DELETE_PRODUCT";
const DELETE_PRODUCT_SUCCESS = "nimap-crud-test/product/DELETE_PRODUCT_SUCCESS";
const DELETE_PRODUCT_FAILURE = "nimap-crud-test/product/DELETE_PRODUCT_FAILURE";

const initialState = {
    products: [],
    message: "",
    error: ""
}

export function product(state={...initialState}, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products
            };
        case ADD_PRODUCTS_SUCCESS:
            return {
                ...state,
                message: action.message
            };
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                message: action.message
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                message: action.message
            }
        case GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case ADD_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case EDIT_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export function getProducts( pageSize, pageNumber ) {
    return {
        type: GET_ALL_PRODUCTS,
        pageSize,
        pageNumber
    }
}

export function addProducts(products) {
    return {
        type: ADD_PRODUCTS,
        products
    }
}

export function editProduct(product) {
    return {
        type: EDIT_PRODUCT,
        product
    }
}

export function deleteProduct(_id) {
    return {
        type: DELETE_PRODUCT,
        productId: _id
    }
}

function* handleGetProducts({ pageSize, pageNumber }) {
    try {

    } catch (exception) {
        yield put({
            type: GET_ALL_PRODUCTS_FAILURE,
            error: exception.message
        });
    }
}

function* handleAddProducts({ products }) {
    try {

    } catch (exception) {
        yield put({
            type: ADD_PRODUCTS_FAILURE,
            error: exception.message
        });
    }
}

function* handleEditProduct({ product }) {
    try {

    } catch (exception) {
        yield put({
            type: EDIT_PRODUCT_FAILURE,
            error: exception.message
        });
    }
}

function* handleDeleteProduct({ productId }) {
    try {

    } catch (exception) {
        yield put({
            type: DELETE_PRODUCT_FAILURE,
            error: exception.message
        });
    }
}

export function* getProductsSaga() {
    yield takeEvery(GET_ALL_PRODUCTS, handleGetProducts);
}

export function* addProductsSaga() {
    yield takeEvery(ADD_PRODUCTS, handleAddProducts);
}

export function* editProductSaga() {
    yield takeEvery(EDIT_PRODUCT, handleEditProduct);
}

export function* deleteProductSaga() {
    yield takeEvery(DELETE_PRODUCT, handleDeleteProduct);
}
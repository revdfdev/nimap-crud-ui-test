import { call, put, takeEvery } from "redux-saga/effects";
//ACTIONS
const GET_CATEGORIES = "nimap-crud-test/category/GET_CATEGORIES";
const GET_CATEGORIES_SUCCESSFUL = "nimap-crud-test/category/GET_CATEGORIES_SUCCESSFUL";
const GET_CATEGORIES_FAILURE = "nimap-crud-test/category/GET_CATEGORIES_FAILURE";

const ADD_CATEGORY = "nimap-crud-test/category/ADD_CATEGORY";
const ADD_CATEGORY_SUCCESSFUL = "nimap-crud-test/category/ADD_CATEGORY_SUCCESSFUL";
const ADD_CATEGORY_FAILURE = "nimap-crud-test/category/ADD_CATEGORY_FAILURE";

const EDIT_CATEGORY = "nimap-crud-test/category/EDIT_CATEGORY";
const EDIT_CATEGORY_SUCCESSFUL = "nimap-crud-test/category/EDIT_CATEGORY_SUCCESSFUL";
const EDIT_CATEGORY_FAILURE = "nimap-crud-test/category/EDIT_CATEGORY_FAILURE";


//STATE
const initialState = {
    categories: [],
    message: "",
    error: ""
}


//REDUCER
export function category(state={...initialState}, action) {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESSFUL:
            return {
                ...state,
                categories: action.categories
            };
        case ADD_CATEGORY_SUCCESSFUL:
            return {
                ...state,
                message: action.message
            };

        case EDIT_CATEGORY_SUCCESSFUL:
            return {
                ...state,
                message: action.message
            }

        case GET_CATEGORIES_SUCCESSFUL:
            return {
                ...state,
                error: action.error
            };
        case ADD_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.error
            }

        case EDIT_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

//ACTION CREATORS
export function getAllCategories() {
    return {
        type: GET_CATEGORIES
    }
}

export function addCategoryAction(data) {
    return {
        type: ADD_CATEGORY,
        data
    }
}

export function updateCategoryAction(data) {
    return {
        type: EDIT_CATEGORY,
        data
    }
}

function* handleGetAllCategories({  }) {
    try {

    } catch (exception) {
        yield put({
            type: GET_CATEGORIES_FAILURE,
            error: exception.message
        });
    }
}

function* handleAddCategory({ data }) {
    try {

    } catch (exception) {
        yield put({
            type:ADD_CATEGORY_FAILURE,
            error: exception.message
        })
    }
}

function* handleEditCategory({ data }) {
    try {

    } catch (exception) {
        yield put({
            type: EDIT_CATEGORY_FAILURE,
            error: exception.message
        })
    }
}

export function* getCategoriesSaga() {
    yield takeEvery(GET_CATEGORIES, handleGetAllCategories);
}

export function* addCategorySaga() {
    yield takeEvery(ADD_CATEGORY, handleAddCategory);
}

export function* editCategorySaga() {
    yield takeEvery(EDIT_CATEGORY, handleEditCategory);
}
import { CategoryItems } from "./CategoryItems";
import { connect } from "react-redux";
import { memo } from "react";
import { getAllCategories } from "../../store/ducks/category.duck";

function mapStateToProps(state) {
    return {
        categories: state.category.categories
    }
}

export default connect(mapStateToProps, { getAllCategories })(CategoryItems);
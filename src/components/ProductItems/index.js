import { ProductItems } from "./ProductItems";
import { connect } from "react-redux";
import { getProducts } from "../../store/ducks/product.duck";
import { memo } from "react";

function mapStateToProps(state) {
    return {
        products: state.product.products,
        pageSize: state.product.pageSize,
    }
}

export default memo(connect(mapStateToProps, { getProducts })(ProductItems));
import React, { useEffect, useState, useCallback } from 'react'
import { Col, Row } from "react-bootstrap";
import Empty from "../Empty";
import ReactPaginate from "react-paginate";
import ProductItem from "../ProductItem";
import "./ProductItems.css";

const initialState = {
    offset: 0
}

export function ProductItems({ categoryid, products, getProducts, pageSize }) {

    const [state, setState] = useState({...initialState})

    useEffect(() => {
        getProducts(categoryid, state.offset);
        return () => {
        }
    }, [state.offset, products])

    const onPageChange = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 10);
        setState({
            offset: offset
        });
    }

    return (
        <Col>
            <Row lg="4" md="2" sm="1">
                {products.length > 0 ? products.map(product => <ProductItem product={product} />) : <Empty />}
            </Row>
            <Row className="d-flex justify-content-center">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageSize}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={onPageChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </Row>
        </Col>
    )
}

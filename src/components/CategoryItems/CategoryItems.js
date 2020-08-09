import React, { useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import Empty from "../Empty";
import CategoryItem from "../CategoryItem";

export function CategoryItems({ categories, getAllCategories }) {

    useEffect(() => {

        getAllCategories();

        return () => {

        }
    }, [categories])

    return (
        <Col>
            <Row lg="4" md="2" sm="1">
                {categories.length > 0 ? categories.map(category => <CategoryItem category={category} />) : <Empty/>}
            </Row>
        </Col>
    )
}

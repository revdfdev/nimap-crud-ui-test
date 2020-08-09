import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import { category } from '../../store/ducks/category.duck';

export function ProductItem({ product }) {

    return (
        <Card>
            <Card.Header>
                <div className="h5">{`${product.proID}: ${product.name}`}</div>
            </Card.Header>
            <Card.Body>
                <Col>
                    <img src={category.url} alt="category image" />
                </Col>
                <Col>
                    <Row>
                        <div className="h5">{`${product.catId}: ${product.catName}`}</div>
                    </Row>
                </Col>
            </Card.Body>
            <Card.Footer>
                <Row className="d-flex justify-content-between">
                </Row>
            </Card.Footer>
        </Card>
    )
}

import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";

export function CategoryItem({ category, history }) {

    const showProducts = (e) => {
        e.preventDefault();
        history.push(`/${category._id}`)
    }

    return (
        <Card>
            <Card.Header>
                <div className="h5">{`${category.catId}: ${category.name}`}</div>
            </Card.Header>
            <Card.Body>
                <Col>
                    <img src={category.url} alt="category image" />
                </Col>
            </Card.Body>
            <Card.Footer>
                <Row className="d-flex justify-content-center">
                    <Button color="primary" onClick={showProducts}>View products</Button>
                </Row>
            </Card.Footer>
        </Card>
    )
}

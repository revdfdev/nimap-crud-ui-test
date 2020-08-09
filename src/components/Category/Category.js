import React from "react";
import CategoryItems from "../CategoryItems";
import { Container, Card } from "react-bootstrap";


export function Category ({ match }) {
    return (
        <Container>
            <Card>
                <Card.Header className="d-flex justify-content-center">
                    <div className="h1">Categories</div>
                </Card.Header>
                <Card.Body>
                    <CategoryItems />
                </Card.Body>
            </Card>
        </Container>
    )
}
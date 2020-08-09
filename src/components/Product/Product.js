import React from 'react'
import { Container, Card } from "react-bootstrap";

export function Product({ categoryid }) {
    return (
        <Container>
            <Card>
                <Card.Header className="d-flex justify-content-center">
                    <div className="h1">Products</div>
                </Card.Header>
                <Card.Body>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}

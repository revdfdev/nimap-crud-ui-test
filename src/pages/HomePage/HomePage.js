import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Category from "../../components/Category";

export function HomePage({ match, categories }) {
    return (
        <Container>
            <Col>
                <Row>
                    <Category />
                </Row>
            </Col>
        </Container>
    )
}
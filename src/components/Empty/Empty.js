import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export function Empty({}) {
    return (
        <Container>
            <Col>
                <Row>
                    <Container className="d-flex justify-content-center">
                        Nothing to show.
                    </Container>
                </Row>
            </Col>
        </Container>
    )
}
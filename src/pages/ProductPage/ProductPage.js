import React, { useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductItems from "../../components/ProductItems";

export function ProductPage ({ match }) {

    const { categoryid } = useParams();

    return (
        <Container>
            <Col>
                <Row>
                    <Container>
                        <ProductItems categoryid={categoryid} />
                    </Container>
                </Row>
            </Col>
        </Container>
    )
}
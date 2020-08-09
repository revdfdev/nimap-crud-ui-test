import React, { useState, useEfffect, useCallback } from "react"
import { Navbar, Nav, Button } from "react-bootstrap";

export function AppHeader({ match, onButtonClicked }) {

    const pathName = match.path;

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand className="mr-auto">
                Nimap infotech test
            </Navbar.Brand>
            <Button color="secondary" onClick={onButtonClicked}>{pathName === "/" ? "Add category" : "Add products"}</Button>
        </Navbar>
    )
}
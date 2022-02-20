import React, { ReactElement, useContext } from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { themeContext } from "../utils/Theme"

export function AppNavbar(): ReactElement {
  const { style, setStyle } = useContext(themeContext)
  const isCursive = style?.fontFamily == "cursive"

  return (
    <Navbar style={{ padding: "5px 24px", background: "#0B192E" }}>
      <Navbar.Brand as={Link} to="/" style={{ color: "#64ffda" }}>
        React Hooks for Pros
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/person-editor" style={{ color: "#CDD7F6" }}>
          Person Editor
        </Nav.Link>
        <Nav.Link as={NavLink} to="/counter" style={{ color: "#CDD7F6" }}>
          Rules of Hooks
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/kimrof-user-editor"
          style={{ color: "#CDD7F6" }}
        >
          Kimrof
        </Nav.Link>
        <Nav.Link
          href="https://formik.org/docs/api/formik"
          target="formik"
          style={{ color: "#CDD7F6" }}
        >
          Formik
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link
          className="justify-content-end"
          as={Button}
          variant="link"
          style={{ color: "#CDD7F6" }}
          onClick={() => {
            setStyle({ fontFamily: isCursive ? "inherit" : "cursive" })
          }}
        >
          {isCursive ? "Normal" : "Cursive"}
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

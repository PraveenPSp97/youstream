import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <Container fluid className="Navbar p-3">
      <Nav>
        <Link to="/">
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBox />
      </Nav>
    </Container>
  );
};

export default Header;

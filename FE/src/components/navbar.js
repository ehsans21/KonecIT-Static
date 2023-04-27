import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { t } from "i18next";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useTranslation } from "react-i18next";

export default function RespoNav() {
  const { t, i18n } = useTranslation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">KonecIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">{t("Home")}</NavLink>
            <NavLink to="careers">{t("Careers")}</NavLink>
            <NavLink to="about">{t("About")}</NavLink>
            <NavLink to="help">{t("Help")}</NavLink>
            <NavDropdown title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => i18n.changeLanguage('ar')}>العربية</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('he')}>עברית</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}




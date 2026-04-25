import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function RespoNav() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg" className="site-nav">
      <Container>
        <Navbar.Brand href="/">
          Konec<span>IT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            <NavLink to="/" className={({ isActive }) => 'nav-link-custom' + (isActive ? ' active' : '')} end>
              {t('Home')}
            </NavLink>
            <NavLink to="about" className={({ isActive }) => 'nav-link-custom' + (isActive ? ' active' : '')}>
              {t('About')}
            </NavLink>
            <NavLink to="careers" className={({ isActive }) => 'nav-link-custom' + (isActive ? ' active' : '')}>
              {t('Careers')}
            </NavLink>
            <NavLink to="help" className={({ isActive }) => 'nav-link-custom' + (isActive ? ' active' : '')}>
              {t('Help')}
            </NavLink>
            <NavDropdown title="🌐 Language" id="lang-dropdown" className="lang-dropdown ms-lg-2">
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>🇬🇧 English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('ar')}>🇸🇦 العربية</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('he')}>🇮🇱 עברית</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

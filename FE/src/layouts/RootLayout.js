import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../components/Breadcrumbs';
import RespoNav from '../components/navbar';

export default function RootLayout() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="root-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <RespoNav />
        <Breadcrumbs />
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <Container>
          <div className="footer-brand">Konec<span>IT</span></div>
          <p>{t('footer_desc')}</p>
          <hr className="footer-divider" />
          <p className="footer-copy">© {currentYear} KonecIT. {t('copyright')}</p>
        </Container>
      </footer>
    </div>
  );
}

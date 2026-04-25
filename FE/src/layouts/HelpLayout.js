import { NavLink, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function HelpLayout() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="page-header">
        <Container>
          <h1>{t('Help')}</h1>
          <p>{t('faq_desc')}</p>
        </Container>
      </div>

      <div className="section">
        <Container>
          <div className="help-tabs">
            <NavLink to="faq" className={({ isActive }) => 'help-tab-link' + (isActive ? ' active' : '')}>
              {t('view_faq')}
            </NavLink>
            <NavLink to="contact" className={({ isActive }) => 'help-tab-link' + (isActive ? ' active' : '')}>
              {t('contact_us')}
            </NavLink>
          </div>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

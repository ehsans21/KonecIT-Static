import { NavLink, Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const services = [
  { key: 'maintenance', icon: '🔧' },
  { key: 'Networks',    icon: '🌐' },
  { key: 'Infosec',     icon: '🔒' },
  { key: 'techsupport', icon: '💻' },
];

const stats = [
  { valueKey: 'years_exp',    labelKey: 'years_exp_label' },
  { valueKey: 'clients',      labelKey: 'clients_label' },
  { valueKey: 'services_num', labelKey: 'services_num_label' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="page-header">
        <Container>
          <h1>{t('About Title')}</h1>
          <p>{t('About body')}</p>
        </Container>
      </div>

      {/* Who we are */}
      <div className="section">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <p className="section-label">{t('About_nav')}</p>
              <h2 className="section-title">{t('About Title')}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('About desc')}</p>

              <Row className="g-3">
                {stats.map(({ valueKey, labelKey }) => (
                  <Col key={valueKey} xs={4}>
                    <div className="about-stat">
                      <h3>{t(valueKey)}</h3>
                      <p>{t(labelKey)}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={6}>
              <Row className="g-3">
                {services.map(({ key, icon }) => (
                  <Col key={key} xs={6}>
                    <div className="service-card">
                      <div className="service-icon">{icon}</div>
                      <h5>{t(key)}</h5>
                      <p>{t(key + '_desc')}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Services sub-nav */}
          <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            <NavLink
              to="services"
              className={({ isActive }) => 'help-tab-link' + (isActive ? ' active' : '')}
            >
              {t('services_title')} →
            </NavLink>
          </div>

          <Outlet />
        </Container>
      </div>
    </div>
  );
}

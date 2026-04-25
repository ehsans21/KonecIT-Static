import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HERO_IMG = 'https://images.unsplash.com/photo-1675510183229-c50371163c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';

const services = [
  { key: 'maintenance', icon: '🔧' },
  { key: 'Networks',    icon: '🌐' },
  { key: 'Infosec',     icon: '🔒' },
  { key: 'techsupport', icon: '💻' },
];

const steps = [
  { num: '01', titleKey: 'req_service',         descKey: 'req_service_desc' },
  { num: '02', titleKey: 'contract_negotiation', descKey: 'contract_negotiation_desc' },
  { num: '03', titleKey: 'start_services',       descKey: 'start_services_desc' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Hero heroImg={HERO_IMG} />

      {/* Services Overview */}
      <div className="section">
        <Container>
          <div className="text-center mb-5">
            <p className="section-label">{t('services')}</p>
            <h2 className="section-title">{t('services_title')}</h2>
            <p className="section-desc mx-auto">{t('services_desc')}</p>
          </div>
          <Row className="g-4">
            {services.map(({ key, icon }) => (
              <Col key={key} xs={12} sm={6} lg={3}>
                <div className="service-card">
                  <div className="service-icon">{icon}</div>
                  <h5>{t(key)}</h5>
                  <p>{t(key + '_desc')}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* How We Work */}
      <div className="section section-alt">
        <Container>
          <div className="text-center mb-5">
            <p className="section-label">{t('steps')}</p>
            <h2 className="section-title">{t('howto_workwithus')}</h2>
            <p className="section-desc mx-auto">{t('howto_workwithus_steps')}</p>
          </div>
          <Row className="g-4">
            {steps.map(({ num, titleKey, descKey }) => (
              <Col key={num} xs={12} md={4}>
                <div className="step-card">
                  <div className="step-number">{num}</div>
                  <h5>{t(titleKey)}</h5>
                  <p>{t(descKey)}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <Container>
          <h2>{t('workwithus')}</h2>
          <p>{t('Body')}</p>
          <Link to="help/contact" className="btn-hero">{t('hero_cta')}</Link>
        </Container>
      </div>
    </div>
  );
}

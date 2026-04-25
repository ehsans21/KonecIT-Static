import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Hero({ heroImg }) {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <img alt="KonecIT hero" src={heroImg} />
      <div className="hero-overlay" />
      <Container>
        <div className="hero-content">
          <h1>
            {t('Welcome')}
          </h1>
          <p>{t('Body')}</p>
          <Link to="help/contact" className="btn-hero">{t('hero_cta')}</Link>
        </div>
      </Container>
    </div>
  );
}

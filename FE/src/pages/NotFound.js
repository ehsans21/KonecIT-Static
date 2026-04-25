import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="not-found">
        <div>
          <h1>404</h1>
          <h2>{t('not_found_title')}</h2>
          <p>{t('not_found_desc')}</p>
          <Link to="/" className="btn-hero">{t('go_home')}</Link>
        </div>
      </div>
    </Container>
  );
}

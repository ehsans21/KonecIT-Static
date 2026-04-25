import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function CareersLayout() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="page-header">
        <Container>
          <h1>{t('careers_title')}</h1>
          <p>{t('careers_desc')}</p>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

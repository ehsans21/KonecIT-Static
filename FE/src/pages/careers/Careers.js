import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import careers from './data';

export default function Careers() {
  const { t } = useTranslation();

  return (
    <Row className="g-4">
      {careers.map((job) => (
        <Col key={job.id} xs={12} md={6}>
          <div className="job-card">
            <span className="job-type-badge">{t(job.type)}</span>
            <h5>{job.title}</h5>
            <div className="job-meta">
              <span>📍 {job.location}</span>
            </div>
            <p><strong>{t('requirements')}:</strong> {job.requirements}</p>
            <a href={`mailto:careers@konecit.com?subject=Application for ${job.title}`} className="btn-apply">
              {t('apply_now')}
            </a>
          </div>
        </Col>
      ))}
    </Row>
  );
}

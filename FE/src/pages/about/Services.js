import { useTranslation } from 'react-i18next';

const steps = [
  { num: '01', titleKey: 'req_service',          descKey: 'req_service_desc' },
  { num: '02', titleKey: 'contract_negotiation',  descKey: 'contract_negotiation_desc' },
  { num: '03', titleKey: 'start_services',        descKey: 'start_services_desc' },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <p className="section-label">{t('steps')}</p>
      <h3 className="section-title" style={{ marginBottom: '0.5rem' }}>{t('howto_workwithus')}</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('howto_workwithus_steps')}</p>

      {steps.map(({ num, titleKey, descKey }) => (
        <div key={num} className="process-step">
          <div className="process-step-num">{num}</div>
          <div className="process-step-content">
            <h5>{t(titleKey)}</h5>
            <p>{t(descKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

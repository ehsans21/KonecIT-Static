import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import faqData from './faqData';

export default function Faq() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <div>
      <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>{t('faq_title')}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('faq_desc')}</p>

      {faqData.map((item) => (
        <div key={item.id} className="faq-item">
          <button
            className={'faq-question' + (openId === item.id ? ' open' : '')}
            onClick={() => toggle(item.id)}
          >
            {item.question}
            <span className="faq-icon">{openId === item.id ? '−' : '+'}</span>
          </button>
          {openId === item.id && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

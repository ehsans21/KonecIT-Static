import { useState } from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';

export default function Contact() {
  const { t } = useTranslation();
  const data = useActionData();

  return (
    <div>
      <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>{t('contact_title')}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('contact_desc')}</p>

      <Row className="g-4">
        <Col md={7}>
          <div className="contact-form-wrapper">
            <Form method="post" action="/help/contact">
              <label>
                <span className="form-label-custom">{t('your_email')}</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control-custom"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                <span className="form-label-custom">{t('your_message')}</span>
                <textarea
                  name="message"
                  required
                  className="form-control-custom"
                  placeholder="How can we help you?"
                />
              </label>
              <button type="submit" className="btn-submit">{t('send_message')}</button>

              {data && data.error && <div className="form-error">{data.error}</div>}
            </Form>
          </div>
        </Col>

        <Col md={5}>
          <div style={{ padding: '1.5rem 0' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
              <h6 style={{ fontWeight: 700, color: 'var(--primary)' }}>Email</h6>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>info@konecit.com</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📞</div>
              <h6 style={{ fontWeight: 700, color: 'var(--primary)' }}>Phone</h6>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+972 (0) 50-000-0000</p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
              <h6 style={{ fontWeight: 700, color: 'var(--primary)' }}>Office</h6>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Tel Aviv, Israel</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  };

  if (submission.message.length < 10) {
    return { error: 'Message must be at least 10 characters long.' };
  }

  // TODO: send to backend when available
  console.log('Contact form submission:', submission);

  return redirect('/');
};

import { Link, useRouteError } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function CareersError() {
  const error = useRouteError();

  return (
    <Container>
      <div className="not-found">
        <div>
          <h1>⚠️</h1>
          <h2>Something went wrong</h2>
          <p>{error?.message || 'An unexpected error occurred.'}</p>
          <Link to="/" className="btn-hero">Back to Home</Link>
        </div>
      </div>
    </Container>
  );
}

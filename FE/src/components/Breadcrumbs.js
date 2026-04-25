import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Breadcrumbs() {
  const location = useLocation();

  if (location.pathname === '/') return null;

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(c => c !== '')
    .map((crumb, index, arr) => {
      currentLink += `/${crumb}`;
      const isLast = index === arr.length - 1;

      return (
        <span key={crumb} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {!isLast ? (
            <>
              <Link to={currentLink}>{crumb}</Link>
              <span className="crumb-sep">/</span>
            </>
          ) : (
            <span className="crumb-current">{crumb}</span>
          )}
        </span>
      );
    });

  return (
    <div className="breadcrumbs-bar">
      <Container>
        <Link to="/">Home</Link>
        {crumbs.length > 0 && <span className="crumb-sep">/</span>}
        {crumbs}
      </Container>
    </div>
  );
}

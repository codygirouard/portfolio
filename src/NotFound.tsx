import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/" className="button">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

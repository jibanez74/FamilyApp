import { Spinner } from 'react-bootstrap';

const Loader = () => (
  <Spinner
    animation="border"
    role="status"
    style={{
      width: '100px',
      height: '100px',
      margin: 'auto',
      display: 'block',
      position: 'absolute',
    }}
  >
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export default Loader;
